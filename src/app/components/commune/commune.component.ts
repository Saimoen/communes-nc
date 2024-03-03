import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Commune {
  Nom: string;
  CodeInsee: number;
  CodePostal: number;
  Population: number;
  Superficie: string;
  DensitéPopulation: string;
  latitude: string;
  longitude: string;
  Province: string;
}

@Component({
  selector: 'app-commune',
  standalone: true,
  imports: [NgClass],
  templateUrl: './commune.component.html',
  styleUrl: './commune.component.scss',
})
export class CommuneComponent {
  @Input() public data: Commune[] = [];

  public getCouleurIntensite(superficie: string): string {
    if (parseInt(superficie) > 1000) {
      return 'color-very-high';
    } else if (parseInt(superficie) > 600) {
      return 'color-high';
    } else if (parseInt(superficie) > 300) {
      return 'color-mid';
    } else if (parseInt(superficie) > 30) {
      return 'color-low';
    } else {
      return '';
    }
  }

  public getClasse(province: string, intensiteCouleur: string): string {
    switch (province) {
      case 'Sud':
        return `sud ${intensiteCouleur}`;
      case 'Nord':
        return `nord ${intensiteCouleur}`;
      case 'Iles':
        return `iles ${intensiteCouleur}`;
      default:
        return '';
    }
  }

  public police(population: number): string {
    switch (true) {
      case population > 10000:
        return 'fs-very-high';
      case population > 5000:
        return 'fs-high';
      case population > 1000:
        return 'fs-medium';
      case population > 100:
        return 'fs-low';
      default:
        return '';
    }
  }
}
