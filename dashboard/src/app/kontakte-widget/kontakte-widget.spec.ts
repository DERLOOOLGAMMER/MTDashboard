import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KontakteWidget } from './kontakte-widget';

describe('KontakteWidget', () => {
  let component: KontakteWidget;
  let fixture: ComponentFixture<KontakteWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontakteWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(KontakteWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
