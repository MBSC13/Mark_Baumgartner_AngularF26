import { Component } from '@angular/core';
import { Mtg } from '../models/mtg';
import { MtgListItem } from '../mtg-list-item/mtg-list-item';

@Component({
  imports: [],
  selector: 'app-mtg-list',
  styleUrl: './mtg-list.scss',
  templateUrl: './mtg-list.html',
})
export class MtgList {
  mtgCards: Mtg[] = [
    {
      id: 1,
      name: 'Guile',
      color: 'U',
      manaCost: '3UUU',
      cardType: 'Creature',
      creatureType: 'Elemental Incarnation',
    },
    {
      id: 2,
      name: 'Mass of Ghouls',
      color: 'B',
      manaCost: '3BB',
      cardType: 'Creature',
      creatureType: 'Zombie Warrior',
    },
    { id: 3,
      name: 'Prismatic Lace',
      color: 'U',
      manaCost: 'U',
      cardType: 'Instant'
    },
    {
      id: 4,
      name: "Executioner's Hood",
      color: 'NC',
      manaCost: 2,
      cardType: 'Artifact',
      creatureType: 'Equipment',
    },
    { id: 5,
      name: 'Channel',
      color: 'G',
      manaCost: 'GG',
      cardType: 'Sorcery'
    },
    { id: 6,
      name: "Chandra's Outrage",
      color: 'R',
      manaCost: '2RR',
      cardType: 'Instant'
    },
  ];
  protected readonly MtgListItem = MtgListItem;
}
