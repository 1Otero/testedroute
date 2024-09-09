import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoreByProducerComponent } from './create-store-by-producer.component';

describe('CreateStoreByProducerComponent', () => {
  let component: CreateStoreByProducerComponent;
  let fixture: ComponentFixture<CreateStoreByProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateStoreByProducerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStoreByProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
