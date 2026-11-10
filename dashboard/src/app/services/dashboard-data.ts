import { Injectable, signal } from '@angular/core';

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
}

export interface WeatherData {
  temperature: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardData {
  profile = signal<UserProfile>({
    name: 'Marten Jelitto',
    phone: '+49 1575 8804495',
    email: 'Tyler.Bork@bgv.com',
  });

  weather = signal<WeatherData>({
    temperature: 18,
    description: 'Bewölkt',
  });
}