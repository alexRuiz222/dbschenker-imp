import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteShipmentComponent } from './quote-shipment.component';

describe('QuoteShipmentComponent', () => {
  let component: QuoteShipmentComponent;
  let fixture: ComponentFixture<QuoteShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteShipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
