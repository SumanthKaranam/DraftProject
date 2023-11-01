import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCardsComponent } from './loan-cards.component';

describe('LoanCardsComponent', () => {
  let component: LoanCardsComponent;
  let fixture: ComponentFixture<LoanCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
