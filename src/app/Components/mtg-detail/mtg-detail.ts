import { Component, computed, inject, input, output } from '@angular/core';
import { MtgService } from '../../services/mtg-service';
import { RouterLink } from '@angular/router';
import { DatePipe, LowerCasePipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RarityStarsPipe } from '../../pipes/rarity-stars-pipe';
import { DaysPassedPipe } from '../../pipes/days-passed-pipe';

@Component({
  imports: [
    NgOptimizedImage,
    RouterLink,
    DatePipe,
    TitleCasePipe,
    LowerCasePipe,
    RarityStarsPipe,
    DaysPassedPipe,
  ],
  selector: 'app-mtg-detail',
  styleUrl: './mtg-detail.scss',
  templateUrl: './mtg-detail.html',
})
export class MtgDetail {
  protected mtgService = inject(MtgService);
  //declares output event that carries a number, to hold id to pass along to removeCard
  removeId = output<string>();

  id = input.required<string>();

  protected mtg = computed(() => this.mtgService.getById(this.id()));
}
