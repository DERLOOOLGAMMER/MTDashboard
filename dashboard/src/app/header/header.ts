import {
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';

import { DatePipe } from '@angular/common';
import { DashboardData } from '../services/dashboard-data';

interface WeatherResponse {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  dashboardData = inject(DashboardData);

  currentTime = signal(new Date());

  temperature = signal<number | null>(null);
  weatherText = signal('Wetter wird geladen ...');
  weatherError = signal('');

  private clockTimer?: ReturnType<typeof setInterval>;
  private weatherTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    // Uhrzeit jede Sekunde aktualisieren
    this.clockTimer = setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);

    // Wetter sofort laden
    this.loadWeather();

    // Wetter alle 10 Minuten aktualisieren
    this.weatherTimer = setInterval(() => {
      this.loadWeather();
    }, 600_000);
  }

  async loadWeather(): Promise<void> {
    const latitude = 49.0069;
    const longitude = 8.4037;

    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${latitude}` +
      `&longitude=${longitude}` +
      `&current=temperature_2m,wind_speed_10m,weather_code` +
      `&timezone=auto`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP-Fehler: ${response.status}`);
      }

      const data = await response.json() as WeatherResponse;

      this.temperature.set(data.current.temperature_2m);
      this.weatherText.set(
        this.getWeatherText(data.current.weather_code)
      );
      this.weatherError.set('');
    } catch (error) {
      console.error('Wetter konnte nicht geladen werden:', error);
      this.weatherError.set('Wetterdaten nicht verfügbar');
    }
  }

  private getWeatherText(code: number): string {
    if (code === 0) return 'Klar';
    if ([1, 2, 3].includes(code)) return 'Bewölkt';
    if ([45, 48].includes(code)) return 'Nebel';
    if ([51, 53, 55, 56, 57].includes(code)) return 'Nieselregen';
    if ([61, 63, 65, 66, 67].includes(code)) return 'Regen';
    if ([71, 73, 75, 77].includes(code)) return 'Schnee';
    if ([80, 81, 82].includes(code)) return 'Regenschauer';
    if ([95, 96, 99].includes(code)) return 'Gewitter';

    return 'Unbekannt';
  }

  ngOnDestroy(): void {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }

    if (this.weatherTimer) {
      clearInterval(this.weatherTimer);
    }
  }
}