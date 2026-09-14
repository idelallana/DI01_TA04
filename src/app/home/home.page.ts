import { Component, inject, } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  ToastController, IonFooter,IonInput, IonItem, IonList, IonLabel, IonButton,} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //TODO añade los componentes de Ionic y FormsModule a imports
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    FormsModule, IonFooter, IonInput, IonItem, IonList, IonLabel, IonButton,
  ],
})
export class HomePage {

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
  // Puedes cambiar los campos según tu dominio (películas, libros, países, etc.)
  elementos: Elemento[] = [
    // Ejemplo:
    // { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción breve', categoria: 'Cat A' },

    //He modificado el archivo elemento.model.ts con los campos nuevos
  { id: 1, titulo: 'Comerás flores', categoria: 'Novela contemporánea', escritora: 'Lucía Solla', editorial: 'Asteroide' },
  { id: 2, titulo: 'Han cantado Bingo', categoria: 'Novela contemporánea', escritora: 'Lana Corujo', editorial: 'Reservoir Books' },
  { id: 3, titulo: 'Las gratitudes', categoria: 'Novela contemporánea', escritora: 'Delphine de Vigan', editorial: 'Anagrama' },
  { id: 4, titulo: 'La biblioteca de la Medianoche', categoria: 'Novela contemporánea', escritora: 'Matt Haig', editorial: 'Alianza Editorial' },
  { id: 5, titulo: 'El descontento', categoria: 'Novela contemporánea', escritora: 'Beatriz Serrano', editorial: 'Temas de Hoy' },
  ];

  // TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
    return this.elementos.length > 0; //Modificar/MODIFICADO
  }

  // TODO (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    return this.elementos.filter(elemento =>
      elemento.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
    );
    // Implementa el filtro (this.elementos.filter): devuelve solo los elementos cuyo nombre
    // incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas -> .toLowerCase())
  }

  // TODO Modificar el constructor para inyectar Router y ToastController con inject
  // Modifico import { Component } from '@angular/core'; añadiendo "inject"
  private router = inject(Router);
  private toastController = inject(ToastController);

  constructor() {}

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Mostrar mensaje',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
    // Consulta la teoría: apartado "ion-toast vs ion-alert"    
  }
