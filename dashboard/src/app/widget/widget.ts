import { Component } from '@angular/core';
import { ProfileWidget } from '../profile-widget/profile-widget';

@Component({
  selector: 'app-widget',
  imports: [ProfileWidget],
  templateUrl: './widget.html',
  styleUrl: './widget.css',
})
export class Widget {
  widgets = {
    profile: true,
  };
}