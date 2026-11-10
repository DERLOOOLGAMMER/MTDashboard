import { Component, inject } from '@angular/core';
import { DashboardData } from '../services/dashboard-data';

@Component({
  selector: 'app-kontakte-widget',
  templateUrl: './kontakte-widget.html',
  styleUrl: './kontakte-widget.css',
})
export class KontakteWidget {
  readonly dashboardData = inject(DashboardData);
}