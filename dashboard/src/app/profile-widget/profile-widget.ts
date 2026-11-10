import { Component, inject } from '@angular/core';
import { DashboardData } from '../services/dashboard-data';

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.html',
  styleUrl: './profile-widget.css',
})
export class ProfileWidget {
  dashboardData = inject(DashboardData);
}