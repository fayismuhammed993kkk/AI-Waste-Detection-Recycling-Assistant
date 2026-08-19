\# ♻️ AI Waste Detection \& Recycling Assistant



An AI-powered waste detection and recycling assistance system that uses \*\*YOLOv8n\*\*, \*\*FastAPI\*\*, and \*\*Angular\*\* to detect waste objects from uploaded images and provide appropriate recycling guidance.



\---



\## 📌 Project Overview



Improper waste segregation is a major environmental challenge. This project aims to assist users in identifying waste materials automatically and understanding how they should be handled or recycled.



The system combines a computer vision model with a web-based application:



\*\*Image Upload → YOLOv8n Detection → Waste Classification → Recycling Guidance → Annotated Result\*\*



\---



\## ✨ Features



\- 🖼️ Upload waste images through a web interface

\- 🤖 Detect waste objects using a trained \*\*YOLOv8n\*\* model

\- 📦 Display detected objects with bounding boxes

\- 📊 Provide detection results and confidence information

\- ♻️ Provide recycling/disposal guidance based on detected waste

\- ⚡ FastAPI backend for model inference

\- 🌐 Angular frontend for user interaction

\- 🖼️ Generate annotated images containing detection results



\---



\## 🏗️ System Architecture



```text

&#x20;                   User

&#x20;                     │

&#x20;                     ▼

&#x20;            ┌─────────────────┐

&#x20;            │ Angular Frontend│

&#x20;            └────────┬────────┘

&#x20;                     │

&#x20;               Image Upload

&#x20;                     │

&#x20;                     ▼

&#x20;            ┌─────────────────┐

&#x20;            │ FastAPI Backend │

&#x20;            └────────┬────────┘

&#x20;                     │

&#x20;                     ▼

&#x20;            ┌─────────────────┐

&#x20;            │    YOLOv8n      │

&#x20;            │ Trained Model   │

&#x20;            └────────┬────────┘

&#x20;                     │

&#x20;              Object Detection

&#x20;                     │

&#x20;                     ▼

&#x20;            ┌─────────────────┐

&#x20;            │ Waste Detection │

&#x20;            │    Results      │

&#x20;            └────────┬────────┘

&#x20;                     │

&#x20;                     ▼

&#x20;            ┌─────────────────┐

&#x20;            │ Recycling       │

&#x20;            │ Guidance        │

&#x20;            └────────┬────────┘

&#x20;                     │

&#x20;                     ▼

&#x20;               User Interface

