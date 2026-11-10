import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  @Output() close = new EventEmitter<void>();

  closeSettings(): void {
    this.close.emit();
  }
}