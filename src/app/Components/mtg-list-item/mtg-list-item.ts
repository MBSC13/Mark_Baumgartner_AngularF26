import { Component, input } from '@angular/core';
import { Mtg } from '../../shared/models/mtg';

@Component({
  imports: [],
  selector: 'app-mtg-list-item',
  styleUrl: './mtg-list-item.scss',
  templateUrl: './mtg-list-item.html',
})
export class MtgListItem {

  card = input.required<Mtg>();

}
