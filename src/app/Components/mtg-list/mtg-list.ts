import { Component, inject } from '@angular/core';
import { Mtg } from '../../shared/models/mtg';
import { MtgListItem } from '../mtg-list-item/mtg-list-item';
import { MtgService } from '../../services/mtg-service';

@Component({
  imports: [MtgListItem],
  selector: 'app-mtg-list',
  styleUrl: './mtg-list.scss',
  templateUrl: './mtg-list.html',
})
export class MtgList {

  //Inject MtgService
  private mtgService = inject(MtgService);

  //Point template towards read-only mtgList
  mtgList = this.mtgService.mtgList;
  onCardOpened (card:Mtg) {
    console.log(card.name + " was clicked")
  }
}
