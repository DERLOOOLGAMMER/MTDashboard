import { Component, inject } from '@angular/core';
import { DashboardData } from '../services/dashboard-data';

@Component({
  selector: 'app-bday-widget',
  templateUrl: './bday-widget.html',
  styleUrl: './bday-widget.css',
})
export class BdayWidget {
  readonly dashboardData = inject(DashboardData);
}