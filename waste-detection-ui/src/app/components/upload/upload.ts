import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { PredictionService } from '../../services/prediction';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Api } from '../../services/api';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    JsonPipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './upload.html',
  styleUrl: './upload.css'
})
export class Upload {

  private api = inject(Api);
  private predictionService = inject(PredictionService);
  
  prediction = this.predictionService.prediction;

  selectedFile: File | null = null;
  previewUrl: string | null = null;

  loading = false;


  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.selectedFile = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };

    reader.readAsDataURL(this.selectedFile);

  }

  removeImage(): void {

    this.selectedFile = null;
    this.previewUrl = null;
    this.predictionService.clearPrediction();

  }

  detectWaste(): void  {

   console.log("STEP 1");

   if (!this.selectedFile) {
     alert("No file selected");
     return;
  }

  console.log("STEP 2");

  this.loading = true;
  this.predictionService.clearPrediction();

  console.log("STEP 3");

  this.api.predict(this.selectedFile).subscribe({

    next: (response) => {

      console.log("STEP 4");
      console.log(response);

      this.predictionService.setPrediction(response);  

      console.log("STEP 5");

      this.loading = false;

      console.log("STEP 6");

    },

    error: (error) => {

      console.log("ERROR BLOCK");
      console.error(error);

      this.loading = false;

    }

  });

}
}