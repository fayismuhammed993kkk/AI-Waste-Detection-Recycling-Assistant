from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from model import predict
from recycle_mapping import RECYCLE_MAPPING

import tempfile
import os

app = FastAPI(
    title="AI Waste Detection & Recycling Assistant",
    description="Detect waste objects and provide recycling guidance.",
    version="2.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://127.0.0.1:4200"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Serve annotated images
app.mount("/output", StaticFiles(directory="output"), name="output")


@app.get("/")
def home():
    return {
        "message": "AI Waste Detection & Recycling Assistant is Running!"
    }


@app.post("/predict")
async def detect_waste(file: UploadFile = File(...)):

    # Save uploaded image temporarily
    suffix = os.path.splitext(file.filename)[1]

    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as temp:
        temp.write(await file.read())
        image_path = temp.name

    try:

        # Run YOLO prediction
        results, filename = predict(image_path)

        boxes = results[0].boxes

        print("\n========== YOLO RAW DETECTIONS ==========")

        if len(boxes) == 0:
            print("No objects detected.")

        detections = []

        for box in boxes:

            confidence = float(box.conf[0])

            class_id = int(box.cls[0])
            class_name = results[0].names[class_id]

            print(f"{class_name} : {confidence:.4f}")

            # Ignore weak detections
            if confidence < 0.30:
                continue

            recycle_info = RECYCLE_MAPPING.get(
                class_name,
                {
                    "material": "Unknown",
                    "recyclable": False,
                    "bin": "Unknown",
                    "bin_color": "Unknown",
                    "advice": "No recycling information available.",
                    "environmental_impact": "Unknown",
                    "recycled_into": []
                }
            )

            detections.append({

                "class": class_name,

                "material": recycle_info["material"],

                "confidence": round(confidence, 4),

                "recyclable": recycle_info["recyclable"],

                "bin": recycle_info["bin"],

                "bin_color": recycle_info["bin_color"],

                "advice": recycle_info["advice"],

                "environmental_impact":
                    recycle_info["environmental_impact"],

                "recycled_into":
                    recycle_info["recycled_into"]

            })

        print("=========================================\n")

        if len(detections) == 0:

            return {
                "message": "No waste detected."
            }

        # -------------------------------------
        # Detection Summary
        # -------------------------------------

        summary = {}

        recyclable_count = 0
        non_recyclable_count = 0

        for item in detections:

            cls = item["class"]

            summary[cls] = summary.get(cls, 0) + 1

            if item["recyclable"]:
                recyclable_count += 1
            else:
                non_recyclable_count += 1

        # -------------------------------------
        # Overall Recommendation
        # -------------------------------------

        instructions = []

        for cls in summary:

            info = RECYCLE_MAPPING[cls]

            instructions.append(
                f"{cls}: Place in {info['bin']} ({info['bin_color']} Bin). {info['advice']}"
            )

        if non_recyclable_count == 0:

            message = (
                "Great! All detected items are recyclable."
            )

        elif recyclable_count == 0:

            message = (
                "None of the detected items are recyclable."
            )

        else:

            message = (
                "Detected both recyclable and non-recyclable waste. "
                "Please segregate them properly."
            )

        overall_recommendation = {

            "recyclable_items": recyclable_count,

            "non_recyclable_items": non_recyclable_count,

            "message": message,

            "instructions": instructions

        }

        return {

            "total_objects": len(detections),

            "summary": summary,

            "detections": detections,

            "overall_recommendation":
                overall_recommendation,

            "annotated_image":
                f"http://127.0.0.1:8000/output/{filename}"

        }

    finally:

        if os.path.exists(image_path):
            os.remove(image_path)
            