import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionService } from '../../services/prediction';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-annotated-image',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './annotated-image.html',
  styleUrl: './annotated-image.css'
})
export class AnnotatedImage {

  private predictionService = inject(PredictionService);

  prediction = this.predictionService.prediction;

  imageUrl = computed(() =>
    this.prediction()?.annotated_image
  );

}