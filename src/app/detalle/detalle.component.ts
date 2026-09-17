import { Component, OnInit } from '@angular/core';
import { Elemento } from '../models/elemento.model';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  ],
})
export class DetalleComponent implements OnInit {

  elementoDetalle?: Elemento;

  constructor() { }

  ngOnInit(): void {
    const state = history.state;
    if (state?.elementoHome) {
      this.elementoDetalle = state.elementoHome;
    }
  }
}