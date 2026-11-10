import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Widget } from './widget/widget';
import { Leftbar } from './leftbar/leftbar';
@Component({
  imports: [RouterOutlet, Leftbar, Header, Widget],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('dashboard');
}
