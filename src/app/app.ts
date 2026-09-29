import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mtg } from './shared/models/mtg';
import { MtgList } from './Components/mtg-list/mtg-list';

@Component({
  imports: [RouterOutlet, MtgList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Mark_Baumgartner_AngularF26');
  name = 'Mark Baumgartner';
  class = 'MAD307 JS Frameworks';
}
