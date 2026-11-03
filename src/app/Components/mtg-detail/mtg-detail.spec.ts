import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtgDetail } from './mtg-detail';

describe('MtgDetail', () => {
  let component: MtgDetail;
  let fixture: ComponentFixture<MtgDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
