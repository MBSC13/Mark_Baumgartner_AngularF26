import { Component, signal } from '@angular/core';
import { Mtg } from '../../shared/models/mtg';
import { MtgListItem } from '../mtg-list-item/mtg-list-item';

@Component({
  imports: [MtgListItem],
  selector: 'app-mtg-list',
  styleUrl: './mtg-list.scss',
  templateUrl: './mtg-list.html',
})
export class MtgList {

  onCardOpened (card:Mtg) {
    console.log(card.name + " was clicked")
  }
}
