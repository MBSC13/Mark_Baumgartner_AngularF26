import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtgList } from './mtg-list';

describe('MtgList', () => {
  let component: MtgList;
  let fixture: ComponentFixture<MtgList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgList],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
