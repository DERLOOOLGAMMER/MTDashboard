import { Component } from '@angular/core';
import { ProfileWidget } from '../profile-widget/profile-widget';
import { SchnellzugriffWidget } from '../schnellzugriff-widget/schnellzugriff-widget';
import { KontakteWidget } from '../kontakte-widget/kontakte-widget';
import { BdayWidget } from '../bday-widget/bday-widget';

@Component({
  selector: 'app-widget',
  imports: [ProfileWidget, SchnellzugriffWidget, KontakteWidget, BdayWidget],
  templateUrl: './widget.html',
  styleUrl: './widget.css',
})
export class Widget {
  widgets = {
    profile: true,
    schnellzugriff: true,
    kontakte: true,
    bday: true,
  };
}