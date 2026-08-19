import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PredictionService } from '../../services/prediction';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-detection-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  templateUrl: './detection-card.html',
  styleUrl: './detection-card.css'
})
export class DetectionCard {

  private predictionService = inject(PredictionService);

  prediction = this.predictionService.prediction;

  detections = computed(() => {

    return this.prediction()?.detections || [];

  });

}