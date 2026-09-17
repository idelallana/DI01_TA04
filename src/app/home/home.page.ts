import { Component, inject } from '@angular/core';
// Añado el servicio Router
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  ToastController, IonFooter, IonInput, IonItem, IonList, IonLabel, IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    FormsModule, IonFooter, IonInput, IonItem, IonList, IonLabel, IonButton, RouterLink,
  ],
})
export class HomePage {

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
  elementos: Elemento[] = [
    { id: 1, titulo: 'Comerás flores', categoria: 'Novela contemporánea', escritora: 'Lucía Solla', editorial: 'Asteroide' },
    { id: 2, titulo: 'Han cantado Bingo', categoria: 'Novela contemporánea', escritora: 'Lana Corujo', editorial: 'Reservoir Books' },
    { id: 3, titulo: 'Las gratitudes', categoria: 'Novela contemporánea', escritora: 'Delphine de Vigan', editorial: 'Anagrama' },
    { id: 4, titulo: 'La biblioteca de la Medianoche', categoria: 'Novela contemporánea', escritora: 'Matt Haig', editorial: 'Alianza Editorial' },
    { id: 5, titulo: 'El descontento', categoria: 'Novela contemporánea', escritora: 'Beatriz Serrano', editorial: 'Temas de Hoy' },
  ];

  // TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
    return this.elementos.length > 0;
  }

  // TODO (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    return this.elementos.filter(elemento =>
      elemento.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  // TODO Injectar Router y ToastController
  private toastController = inject(ToastController);
  private router = inject(Router);

  constructor() {}

  // TODO (Apartado 2 – Navegación):
  // Desarrollar el método verDetalle que recibirá un Elemento como parámetro
  // Navegar a /detalle con el elemento seleccionado
  verDetalle(elementoHome: Elemento): void {
    this.router.navigate(['/detalle'], {
      state: {
        elementoHome
      }
    });
  }

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Lista de libros cargada correctamente',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
  // Consulta la teoría: apartado "ion-toast vs ion-alert"
}