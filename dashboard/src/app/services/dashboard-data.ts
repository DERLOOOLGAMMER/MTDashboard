import { computed, Injectable, signal } from '@angular/core';

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  job: string;
}

export interface WeatherData {
  temperature: number;
  description: string;
}

export interface Contact {
  initials: string;
  name: string;
  department: string;
  extension?: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardData {
  searchTerm = signal('');

  contacts = signal<Contact[]>([
    {
      initials: 'MM',
      name: 'Max Mustermann',
      department: 'IT-Entwicklung',
      extension: '1234',
      email: 'max.mustermann@bgv.de',
    },
    {
      initials: 'EM',
      name: 'Erika Musterfrau',
      department: 'Personal',
      extension: '2345',
      email: 'erika.musterfrau@bgv.de',
    },
    {
      initials: 'IT',
      name: 'IT',
      department: 'IT-Support',
      email: 'it.kommunikation@bgv.de',
    },
    {
      initials: 'TB',
      name: 'Tyler Bork',
      department: 'Azubi FIAE',
      email: 'tyler.bork@bgv.de',
    },
  ]);

  filteredContacts = computed(() => {
    const search = this.searchTerm()
      .trim()
      .toLocaleLowerCase('de-DE');

    if (!search) {
      return this.contacts();
    }

    return this.contacts().filter(contact => {
      const searchableText = [
        contact.initials,
        contact.name,
        contact.department,
        contact.extension ?? '',
        contact.email,
      ]
        .join(' ')
        .toLocaleLowerCase('de-DE');

      return searchableText.includes(search);
    });
  });

  updateSearchTerm(value: string): void {
    this.searchTerm.set(value);
  }

  profile = signal<UserProfile>({
    name: 'Marten Jelitto',
    phone: '+49 1575 8804495',
    email: 'Tyler.Bork@bgv.com',
    job: 'Azubi FIAE',
  });

  weather = signal<WeatherData>({
    temperature: 18,
    description: 'Bewölkt',
  });
}