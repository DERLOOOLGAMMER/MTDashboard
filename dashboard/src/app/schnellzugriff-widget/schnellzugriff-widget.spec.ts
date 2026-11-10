import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchnellzugriffWidget } from './schnellzugriff-widget';

describe('SchnellzugriffWidget', () => {
  let component: SchnellzugriffWidget;
  let fixture: ComponentFixture<SchnellzugriffWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchnellzugriffWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(SchnellzugriffWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
