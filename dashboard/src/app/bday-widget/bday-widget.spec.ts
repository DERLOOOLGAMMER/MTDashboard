import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BdayWidget } from './bday-widget';

describe('BdayWidget', () => {
  let component: BdayWidget;
  let fixture: ComponentFixture<BdayWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BdayWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(BdayWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
