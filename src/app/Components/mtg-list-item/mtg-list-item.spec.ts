import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtgListItem } from './mtg-list-item';

describe('MtgListItem', () => {
  let component: MtgListItem;
  let fixture: ComponentFixture<MtgListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
