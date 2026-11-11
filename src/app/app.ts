import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Mtg } from './shared/models/mtg';
import { AuthGuard } from './services/auth.guard';
import { LoadingService } from './services/loading-service';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected authGuard = inject(AuthGuard);
  protected loading = inject(LoadingService);
}
