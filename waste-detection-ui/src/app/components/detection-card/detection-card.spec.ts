import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionCard } from './detection-card';

describe('DetectionCard', () => {
  let component: DetectionCard;
  let fixture: ComponentFixture<DetectionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DetectionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
