import { computed, effect, inject, Service, signal } from '@angular/core';
import { Mtg } from '../shared/models/mtg';
import { MTG_CONFIG } from '../shared/mtg-config';

@Service()
export class MtgMockService {
  private config = inject(MTG_CONFIG);
  readonly dId = this.config.defaultId;
  readonly dName = this.config.defaultName;
  readonly dColor = this.config.defaultColor;
  readonly dManaCost = this.config.defaultManaCost;
  readonly dCardType = this.config.defaultCardType;
  readonly dCreatureType = this.config.defaultCreatureType;

  private mtgCards = signal<Mtg[]>([
    {
      id: this.dId,
      name: this.dName,
      color: this.dColor,
      manaCost: this.dManaCost,
      cardType: this.dCardType,
      creatureType: this.dCreatureType,
    },
    {
      id: this.dId,
      name: this.dName,
      color: this.dColor,
      manaCost: this.dManaCost,
      cardType: this.dCardType,
      creatureType: this.dCreatureType,
    },

    {
      id: this.dId,
      name: this.dName,
      color: this.dColor,
      manaCost: this.dManaCost,
      cardType: this.dCardType,
    }
  ]);

  //Read-only version for components to consume
  mtgList = this.mtgCards.asReadonly();

  //hasSecondary uses computed() to filter for cards with a secondary type
  hasSecondary = computed(() => this.mtgList().filter((c) => c.creatureType));

  //cardCount tracks the total number of cards in mtgList
  cardCount = computed(() => this.mtgList().length);

  //secondaryCount computes the number of cards with a second type based on above method output
  secondaryCount = computed(() => this.hasSecondary().length);

  //countLog prints a message containing total card count to the console
  countLog = effect(() => {
    console.log('There are now ' + this.cardCount() + ' cards in mtgList');
  });

  secondaryLog = effect(() => {
    console.log('There are ' + this.secondaryCount() + ' cards with secondary type in mtgList');
  });

  //addCard method to add a new item to the list using update()
  //Spread operator makes it possible to always add onto the end of the array
  addCard(c: Mtg): void {
    this.mtgCards.update((list) => [...list, c]);
  }

  //removeCard filters the current array by building a new one with every card whose id does not equal the one passed in.
  //The new array replaces the old one
  removeCard(id: number) {
    this.mtgCards.update((list) => list.filter((c) => c.id !== id));
  }
}
