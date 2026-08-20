# ♻️ AI Waste Detection \& Recycling Assistant

`Python` `YOLOv8` `Computer Vision` `Object Detection` `FastAPI` `Angular` `Machine Learning` `AI`

An end-to-end Computer Vision application for automated waste detection and recycling assistance using YOLOv8n, FastAPI, and Angular.


## 🚀 Live Demo Preview


https://github.com/user-attachments/assets/51a047f6-cef7-4550-9130-050a929da944


*(Above: The Angular frontend allowing users to upload a waste image, send it to the FastAPI backend, run YOLOv8n inference, and display detected waste objects with bounding boxes and recycling guidance).*


## ⭐ Project Highlights

* **Custom-trained YOLOv8n model** for multi-class waste object detection.
* **End-to-end AI pipeline** from dataset preparation and model training to web application integration.
* **FastAPI REST backend** for model inference.
* **Angular frontend** for interactive user interaction.
* **Object detection visualization** with bounding boxes and confidence scores.
* **Automated recycling guidance** based on detected waste categories.
* **Annotated image generation** for visualizing detection results.


## 🎯 Key Features \& Real-World Applications

### Applications

* **Smart Waste Segregation:** Automated identification of waste objects.
* **Recycling Assistance:** Provides recycling and disposal guidance.
* **Waste Management:** Supports automated waste classification and identification.
* **Environmental Awareness:** Helps users understand appropriate waste disposal.
* **Smart Recycling Systems:** Can be extended to automated sorting and monitoring systems.

### Features

* **Automated Waste Detection:** Detects multiple waste categories from an uploaded image.
* **Object Localization:** Generates bounding boxes around detected waste objects.
* **Confidence Scores:** Displays confidence values for individual detections.
* **Recycling Guidance:** Maps detected waste categories to recycling/disposal recommendations.
* **Annotated Results:** Generates an annotated image containing detection results.
* **Interactive Web UI:** Upload and analyze images through the Angular interface.


## 🏗️ System Architecture \& Workflow

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
Detection \& Recycling Recommendations
      ↓
Results Displayed in Browser
```


## 📊 Key Results \& Evaluation

### Global Evaluation

|**Metric**|**Score**|
|-|-|
|**Precision**|**74.0%**|
|**Recall**|**48.3%**|
|**mAP50**|**49.8%**|
|||



## 🧠 Machine Learning Model

The project uses **YOLOv8n** from Ultralytics for object detection.

The trained model used by the backend is:

```text
Backend/models/yolov8nbest.pt
```

The model receives an input image and returns detected waste objects along with their bounding-box locations and confidence scores.

The training workflow and model development are documented in the project Jupyter Notebook.


## 🛠️ Technology Stack

### Computer Vision \& AI

* **Python**
* **YOLOv8n**
* **Ultralytics**
* **PyTorch**
* **OpenCV**
* **NumPy**
* **Object Detection**

### Backend Engineering

* **Python**
* **FastAPI**
* **Uvicorn**
* **REST API**
* **File Upload Handling**

### Frontend Engineering

* **Angular**
* **TypeScript**
* **HTML5**
* **CSS**

### Development Tools

* **Google Colab**
* **Jupyter Notebook**
* **Git**
* **GitHub**


## 💻 Setup \& Installation

To run this project locally, start both the FastAPI backend and Angular frontend.

### 1\. Clone the Repository

```bash
git clone https://github.com/fayismuhammed993kkk/AI-Waste-Detection-Recycling-Assistant.git

cd AI-Waste-Detection-Recycling-Assistant
```

### 2\. Backend Setup (FastAPI)

Navigate to the backend:

```bash
cd Backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment on Windows:

```bash
venv\\Scripts

ctivate
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

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

### 3\. Frontend Setup (Angular)

Open a **new, separate terminal**.

Navigate to the Angular application:

```bash
cd waste-detection-ui
```

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve --open
```

The frontend application will be available at:

```text
http://localhost:4200
```

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
│   ├── recycle\_mapping.py
│   └── requirements.txt
│
├── Notebook/
│   ├── class\_distribution.csv
│   ├── waste\_Detection.ipynb
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


## 🔄 Application Workflow

### 1\. Upload Image

The user uploads an image containing waste through the Angular interface.

### 2\. API Request

The Angular frontend sends the uploaded image to the FastAPI backend.

### 3\. Object Detection

The backend loads the trained YOLOv8n model and performs inference.

### 4\. Waste Identification

The model identifies waste objects and generates bounding boxes and confidence scores.

### 5\. Recycling Mapping

Detected waste categories are mapped to appropriate recycling or disposal recommendations.

### 6\. Annotated Image

The backend generates an annotated image containing the detected waste objects.

### 7\. Results Display

The Angular frontend displays the detected objects, confidence scores, annotated image, and recycling recommendations.


## ♻️ Recycling Assistance

The recycling guidance logic is implemented in:

```text
Backend/recycle\_mapping.py
```

Detected waste categories are mapped to relevant recycling or disposal guidance.

This allows the system to go beyond simple object detection and provide practical waste-management recommendations.


## 🎯 Project Objectives

* Automate waste detection using Computer Vision.
* Identify multiple waste categories from images.
* Assist users with recycling and disposal decisions.
* Integrate a trained deep learning model into a real-world web application.
* Build an end-to-end AI system combining Machine Learning, FastAPI, and Angular.
* Demonstrate practical deployment-oriented AI application development.


## 🚀 Future Improvements

* Expand the dataset and training samples for improved detection accuracy.
* Add real-time camera-based waste detection.
* Add multilingual recycling recommendations.
* Expand recycling guidance for additional waste categories.
* Deploy the application to a cloud platform.
* Add analytics for frequently detected waste categories.
* Optimize inference for edge and mobile devices.
* Integrate automated waste sorting hardware for smart recycling systems.


## 👨‍💻 Author

**Muhammed Fayis**

*Data Science | AI/ML | Computer Vision | Msc Statistics*

