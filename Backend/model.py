from ultralytics import YOLO
import os
import uuid

# Backend folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Model path
MODEL_PATH = os.path.join(BASE_DIR, "models", "yolov8nbest.pt")

# Output folder
OUTPUT_DIR = os.path.join(BASE_DIR, "output")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Load model
model = YOLO(MODEL_PATH)


def predict(image_path):

    results = model.predict(
        source=image_path,
        imgsz=1280,
        conf=0.10,
        save=False,
        verbose=False
    )

    # Generate unique filename
    filename = f"{uuid.uuid4().hex}.jpg"

    output_path = os.path.join(OUTPUT_DIR, filename)

    # Save annotated image
    annotated = results[0].plot()

    import cv2
    cv2.imwrite(output_path, annotated)

    return results, filename