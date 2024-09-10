import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationWebEventJobComponent } from './presentation-web-event-job.component';

describe('PresentationWebEventJobComponent', () => {
  let component: PresentationWebEventJobComponent;
  let fixture: ComponentFixture<PresentationWebEventJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationWebEventJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationWebEventJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
