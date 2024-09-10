import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationInfoEventJobComponent } from './presentation-info-event-job.component';

describe('PresentationInfoEventJobComponent', () => {
  let component: PresentationInfoEventJobComponent;
  let fixture: ComponentFixture<PresentationInfoEventJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationInfoEventJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationInfoEventJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
