import { Component, input, output } from '@angular/core';
import { Mtg } from '../../shared/models/mtg';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-mtg-list-item',
  styleUrl: './mtg-list-item.scss',
  templateUrl: './mtg-list-item.html',
})
export class MtgListItem {
  card = input.required<Mtg>();
  expanded = false;
  opened = output<Mtg>();

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.card());
  }
}
