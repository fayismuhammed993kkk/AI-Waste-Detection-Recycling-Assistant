import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PredictionService } from '../../services/prediction';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './summary.html',
  styleUrl: './summary.css'
})
export class Summary {

  private predictionService = inject(PredictionService);

  prediction = this.predictionService.prediction;

  summaryEntries = computed(() => {

    const data = this.prediction();

    if (!data?.summary) {
      return [];
    }

    return Object.entries(data.summary);

  });

}