import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  imports: [],
  templateUrl: './leftbar.html',
  styleUrl: './leftbar.css',
})
export class Leftbar {
  @Output() settingsClicked = new EventEmitter<void>();

  openSettings(): void {
    this.settingsClicked.emit();
  }
}