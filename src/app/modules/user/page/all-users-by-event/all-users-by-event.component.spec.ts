import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersByEventComponent } from './all-users-by-event.component';

describe('AllUsersByEventComponent', () => {
  let component: AllUsersByEventComponent;
  let fixture: ComponentFixture<AllUsersByEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllUsersByEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllUsersByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
