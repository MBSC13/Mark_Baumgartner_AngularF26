import { Service, signal } from '@angular/core';
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
      creatureType: 'Elemental Incarnation' },
    {
      id: 2,
      name: 'Mass of Ghouls',
      color: 'Black',
      manaCost: '3BB',
      cardType: 'Creature',
      creatureType: 'Zombie Warrior'
    },

    {
      id: 3,
      name: 'Prismatic Lace',
      color: 'Blue',
      manaCost: 'U',
      cardType: 'Instant'
    },
    {
      id: 4,
      name: "Executioner's Hood",
      color: 'Colorless',
      manaCost: 2,
      cardType: 'Artifact',
      creatureType: 'Equipment' },
    {
      id: 5,
      name: 'Channel',
      color: 'Green',
      manaCost: 'GG',
      cardType: 'Sorcery' },

    {
      id: 6,
      name: "Chandra's Outrage",
      color: 'Red',
      manaCost: '2RR',
      cardType: 'Instant' }
  ]);

  //Read-only version for components to consume
  mtgList = this.mtgCards.asReadonly();
}
