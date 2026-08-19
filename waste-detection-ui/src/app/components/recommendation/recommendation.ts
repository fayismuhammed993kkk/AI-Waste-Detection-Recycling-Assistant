import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PredictionService } from '../../services/prediction';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './recommendation.html',
  styleUrl: './recommendation.css'
})
export class Recommendation {

  private predictionService = inject(PredictionService);

  prediction = this.predictionService.prediction;

  recommendation = computed(() =>
    this.prediction()?.overall_recommendation
  );

}
