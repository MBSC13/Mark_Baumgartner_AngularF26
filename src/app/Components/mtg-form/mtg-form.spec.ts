import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtgForm } from './mtg-form';

describe('MtgForm', () => {
  let component: MtgForm;
  let fixture: ComponentFixture<MtgForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
