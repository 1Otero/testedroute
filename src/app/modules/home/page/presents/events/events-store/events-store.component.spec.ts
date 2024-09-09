import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStoreComponent } from './events-store.component';

describe('EventsStoreComponent', () => {
  let component: EventsStoreComponent;
  let fixture: ComponentFixture<EventsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
