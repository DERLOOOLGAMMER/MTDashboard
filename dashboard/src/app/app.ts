import { Component } from '@angular/core';
import { Header } from './header/header';
import { Leftbar } from './leftbar/leftbar';
import { Widget } from './widget/widget';
import { Settings } from './settings/settings';

@Component({
  selector: 'app-root',
  imports: [Header, Leftbar, Widget, Settings],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showSettings = false;

  openSettings(): void {
    this.showSettings = true;
  }

  closeSettings(): void {
    this.showSettings = false;
  }
}