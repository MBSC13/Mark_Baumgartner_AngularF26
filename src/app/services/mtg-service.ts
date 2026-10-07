import { computed, effect, Service, signal } from '@angular/core';
import { Mtg } from '../shared/models/mtg';

@Service()
export class MtgService {
  private mtgCards = signal<Mtg[]>([
    {
      id: 1,
      name: 'Guile',
      color: 'Blue',
      manaCost: '3UUU',
      cardType: 'Creature',
      creatureType: 'Elemental Incarnation',
    },
    {
      id: 2,
      name: 'Mass of Ghouls',
      color: 'Black',
      manaCost: '3BB',
      cardType: 'Creature',
      creatureType: 'Zombie Warrior',
    },

    {
      id: 3,
      name: 'Prismatic Lace',
      color: 'Blue',
      manaCost: 'U',
      cardType: 'Instant',
    },
    {
      id: 4,
      name: "Executioner's Hood",
      color: 'Colorless',
      manaCost: 2,
      cardType: 'Artifact',
      creatureType: 'Equipment',
    },
    {
      id: 5,
      name: 'Channel',
      color: 'Green',
      manaCost: 'GG',
      cardType: 'Sorcery',
    },

    {
      id: 6,
      name: "Chandra's Outrage",
      color: 'Red',
      manaCost: '2RR',
      cardType: 'Instant',
    },
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
  countLog = effect(() => {console.log("There are now " + this.cardCount() + " cards in mtgList")});

  secondaryLog = effect(() => {
    console.log('There are now ' + this.secondaryCount() + ' cards in mtgList');
  })

  //addCard method to add a new item to the list using update()
  //Spread operator makes it possible to always add onto the end of the array
  addCard(c: Mtg): void {
    this.mtgCards.update((list) => [...list, c]);
  }

  //removeCard filters the current array by building a new one with every card whose id does not equal the one passed in.
  //The new array replaces the old one
  removeCard(id: number){
    this.mtgCards.update((list) => list.filter(c => c.id !== id));
  }
}
