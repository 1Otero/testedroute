import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsProducerComponent } from './events-producer.component';

describe('EventsProducerComponent', () => {
  let component: EventsProducerComponent;
  let fixture: ComponentFixture<EventsProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsProducerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
