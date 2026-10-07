import { Component, inject, input, output } from '@angular/core';
import { Mtg } from '../../shared/models/mtg';
import { NgOptimizedImage } from '@angular/common';
import { MtgService } from '../../services/mtg-service';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-mtg-list-item',
  styleUrl: './mtg-list-item.scss',
  templateUrl: './mtg-list-item.html',
})
export class MtgListItem {
  private mtgService = inject(MtgService);
  card = input.required<Mtg>();
  expanded = false;
  opened = output<Mtg>();
  //declares output event that carries a number, to hold id to pass along to removeCard
  removeId = output<number>();

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.card());
  }
}
