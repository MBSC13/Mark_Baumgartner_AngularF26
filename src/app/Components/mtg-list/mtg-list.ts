import { Component, inject, output } from '@angular/core';
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
  protected secondaryCount = this.mtgService.secondaryCount;

  //Point template towards read-only mtgList
  mtgList = this.mtgService.mtgList;
  onCardOpened(card: Mtg) {
    console.log(card.name + ' was clicked');
  }

  //Takes in the output from removeId.emit and passes id up to service to run
  onRemove(id: number) {
    this.mtgService.removeCard(id);
  }
}
