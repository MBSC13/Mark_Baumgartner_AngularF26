import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mtg } from './shared/models/mtg';



@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Mark_Baumgartner_AngularF26');
  name = "Mark Baumgartner";
  class = "MAD307 JS Frameworks";

  mtgCards: Mtg[] = [
    {id: 1, name: 'Guile', color: 'U', manaCost: '3UUU', cardType: 'Creature', creatureType: 'Elemental Incarnation'},
    {id: 2, name: 'Mass of Ghouls', color: 'B', manaCost: '3BB', cardType: 'Creature', creatureType: 'Zombie Warrior'},
    {id: 3, name: 'Prismatic Lace', color: 'U', manaCost: 'U', cardType: 'Instant'},
    {id: 4, name: "Executioner's Hood", color: 'NC', manaCost: 2, cardType: 'Artifact', creatureType: 'Equipment'},
    {id: 5, name: "Channel", color: 'G', manaCost: 'GG', cardType: "Sorcery"},
    {id: 6, name: "Chandra's Outrage", color: "R", manaCost: "2RR", cardType: "Instant"}
  ]
}
