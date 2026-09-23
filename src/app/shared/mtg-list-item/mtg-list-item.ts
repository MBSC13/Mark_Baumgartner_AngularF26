import { Component, input } from '@angular/core';
import { Mtg } from '../models/mtg';

@Component({
  imports: [],
  selector: 'app-mtg-list-item',
  styleUrl: './mtg-list-item.scss',
  templateUrl: './mtg-list-item.html',
})
export class MtgListItem {
  id = input.required<Mtg>();
  name = input.required<Mtg>();
  color = input.required<Mtg>();
  manaCost = input.required<Mtg>();
  cardType = input.required<Mtg>();
  creatureType = input.required<Mtg>();

}
