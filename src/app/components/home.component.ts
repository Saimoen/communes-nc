import { Component, Input } from '@angular/core';
import { CommuneComponent } from './commune/commune.component';
import data from '../data/communes-nc_v1.json';

interface Commune {
  Nom: string
  CodeInsee: number
  CodePostal: number
  Population: number
  Superficie: string
  DensitéPopulation: string
  latitude: string
  longitude: string
  Province: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommuneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public data: Commune[] = data;
}
