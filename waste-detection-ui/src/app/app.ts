import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Upload } from './components/upload/upload';
import { Summary } from './components/summary/summary';
import { DetectionCard } from './components/detection-card/detection-card';
import { Recommendation } from './components/recommendation/recommendation';
import { AnnotatedImage } from './components/annotated-image/annotated-image';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Home,
    Upload,
    Summary,
    DetectionCard,
    Recommendation,
    AnnotatedImage,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'AI Waste Detection & Recycling Assistant';
}