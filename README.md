# ♻️ AI Waste Detection & Recycling Assistant

An end-to-end Computer Vision application for automated waste detection and recycling assistance using **YOLOv8n**, **FastAPI**, and **Angular**.

---

## 🚀 Project Overview

The application uses a trained YOLOv8n object detection model to identify waste objects from uploaded images. The detected objects are presented with bounding boxes and confidence scores, while the system provides recycling or disposal guidance based on the detected waste category.

**Image Upload → YOLOv8n Inference → Waste Detection → Recycling Guidance → Results Display**

---

## ⭐ Project Highlights

- **Custom-trained YOLOv8n model** for waste object detection.
- **End-to-end AI pipeline** from model training to web application integration.
- **FastAPI REST backend** for model inference.
- **Angular frontend** for interactive user interaction.
- **Automated waste detection** with bounding boxes and confidence scores.
- **Recycling guidance system** based on detected waste categories.
- **Annotated image generation** for visualizing detection results.
- **Decoupled frontend and backend architecture** for easier development and deployment.

---

## 🎯 Key Features & Real-World Applications

### Applications

- **Smart Waste Segregation:** Assist users in identifying waste categories.
- **Recycling Assistance:** Provide appropriate recycling or disposal guidance.
- **Waste Management:** Support automated identification of waste materials.
- **Environmental Awareness:** Help users make better waste-handling decisions.

### Features

- **Image-Based Detection:** Upload an image and detect waste objects.
- **Object Localization:** Display bounding boxes around detected objects.
- **Confidence Scores:** Show the model's confidence for each detection.
- **Automated Recycling Guidance:** Map detected waste categories to disposal/recycling information.
- **Annotated Results:** Generate an image containing the detection results.
- **Interactive Web UI:** Access the complete system through an Angular frontend.

---

## 📸 Demo Gallery

Add selected screenshots of the application and detection results here.

<!-- Example:
![Waste Detection Result](images/detection-result.jpg)
-->

---

## 🏗️ System Architecture & Workflow

```text
User Uploads Image
        ↓
Angular Frontend
        ↓
FastAPI Backend API
        ↓
YOLOv8n Trained Model
        ↓
Waste Object Detection
        ↓
Bounding Boxes + Confidence Scores
        ↓
Recycling Mapping
        ↓
Detection & Recycling Results
        ↓
Results Displayed in Angular UI
```

---

## 🧠 Machine Learning Model

The project uses **YOLOv8n** from Ultralytics for object detection.

The trained model used by the backend is:

```text
Backend/models/yolov8nbest.pt
```

The original YOLOv8n model used during model development is also included in the notebook directory:

```text
Notebook/yolov8n.pt
```

The trained model receives an input image and predicts waste objects along with their bounding-box locations and confidence scores.

---

## 📊 Model Development

The model development workflow is documented in:

```text
Notebook/waste_Detection.ipynb
```

The notebook contains the machine learning workflow used for the waste detection project, including dataset preparation, model training, evaluation, and inference experiments.

---

## 🛠️ Technology Stack

### Computer Vision & AI

- **Python**
- **YOLOv8n**
- **Ultralytics**
- **PyTorch**
- **OpenCV**
- **NumPy**
- Object Detection

### Backend Engineering

- **Python**
- **FastAPI**
- **Uvicorn**
- REST API
- File Upload Handling

### Frontend Engineering

- **Angular**
- **TypeScript**
- **HTML**
- **CSS**

### Development Tools

- **Jupyter Notebook**
- **Git**
- **GitHub**

---

## 📁 Repository Structure

```text
AI-Waste-Detection-Recycling-Assistant/
│
├── Backend/
│   ├── models/
│   │   └── yolov8nbest.pt
│   │
│   ├── app.py
│   ├── model.py
│   ├── recycle_mapping.py
│   └── requirements.txt
│
├── Notebook/
│   ├── class_distribution.csv
│   ├── waste_Detection.ipynb
│   └── yolov8n.pt
│
├── waste-detection-ui/
│   ├── public/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Workflow

### 1. Upload Image

The user uploads a waste image through the Angular web interface.

### 2. API Request

The Angular frontend sends the image to the FastAPI backend.

### 3. YOLOv8n Inference

The FastAPI backend loads the trained YOLOv8n model and performs object detection.

### 4. Waste Detection

The model identifies waste objects and returns bounding boxes and confidence scores.

### 5. Recycling Mapping

The detected waste categories are processed using the recycling mapping logic.

### 6. Annotated Image

The backend generates an annotated image showing the detected objects.

### 7. Results Display

The Angular frontend displays the detection results and recycling recommendations.

---

## 🚀 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/fayismuhammed993kkk/AI-Waste-Detection-Recycling-Assistant.git
cd AI-Waste-Detection-Recycling-Assistant
```

### 2. Backend Setup

Navigate to the backend:

```bash
cd Backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn app:app --reload
```

The backend API will be available at:

```text
http://127.0.0.1:8000
```

FastAPI interactive documentation:

```text
http://127.0.0.1:8000/docs
```

### 3. Frontend Setup

Open a new terminal and navigate to:

```bash
cd waste-detection-ui
```

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

The frontend will normally be available at:

```text
http://localhost:4200
```

---

## 📡 API

### Health Check

```http
GET /
```

Example response:

```json
{
  "message": "AI Waste Detection & Recycling Assistant is Running!"
}
```

### Waste Detection

The backend accepts an uploaded image and performs YOLOv8n inference.

The generated annotated images are served through:

```text
/output
```

---

## ♻️ Recycling Assistance

The recycling guidance logic is implemented in:

```text
Backend/recycle_mapping.py
```

The component maps detected waste categories to relevant recycling or disposal guidance.

---

## 🎯 Project Objectives

- Automate waste detection using computer vision.
- Assist users in identifying waste materials.
- Provide recycling and disposal guidance.
- Integrate a trained deep learning model into a practical web application.
- Build an end-to-end AI system combining machine learning, backend APIs, and frontend development.
- Demonstrate deployment-oriented AI application development.

---

## 🔮 Future Improvements

- Improve detection accuracy with additional training data.
- Expand the number of supported waste categories.
- Add real-time camera-based waste detection.
- Add multilingual recycling guidance.
- Deploy the application to a cloud platform.
- Add analytics for frequently detected waste categories.
- Optimize inference for edge and mobile devices.

---

## 👨‍💻 Author

**Muhammed Fayis**

AI / Machine Learning & Data Science

---

## 📌 GitHub

**Repository:**  
https://github.com/fayismuhammed993kkk/AI-Waste-Detection-Recycling-Assistant
