import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerToUserDashboardComponent } from './producer-to-user-dashboard.component';

describe('ProducerToUserDashboardComponent', () => {
  let component: ProducerToUserDashboardComponent;
  let fixture: ComponentFixture<ProducerToUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProducerToUserDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducerToUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
