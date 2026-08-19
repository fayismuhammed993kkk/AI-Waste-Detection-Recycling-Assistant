import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  prediction = signal<any>(null);

  setPrediction(data: any) {
    this.prediction.set(data);
  }

  clearPrediction() {
    this.prediction.set(null);
  }

}