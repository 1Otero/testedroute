import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStoreComponent } from './event-store.component';

describe('EventStoreComponent', () => {
  let component: EventStoreComponent;
  let fixture: ComponentFixture<EventStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
