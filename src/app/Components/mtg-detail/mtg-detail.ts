import { Component, computed, inject, input, output } from '@angular/core';
import { MtgService } from '../../services/mtg-service';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Mtg } from '../../shared/models/mtg';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-mtg-detail',
  styleUrl: './mtg-detail.scss',
  templateUrl: './mtg-detail.html',
})
export class MtgDetail {
  protected mtgService = inject(MtgService);
  // private router = inject(Router);
  //declares output event that carries a number, to hold id to pass along to removeCard
  removeId = output<string>();


  id = input.required<string>();

  protected mtg = computed(() => this.mtgService.getById(this.id()));
}
