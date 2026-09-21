//TODO - importamos computed y signal
import { Component, inject, computed, signal  } from '@angular/core';
// Añado el servicio Router
import { Router,  } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, ToastController, IonFooter, IonInput, IonItem, IonList, IonLabel, IonButton, } from '@ionic/angular/standalone';
// esta parte del codigo ahora no la necesito import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonInput, IonItem, IonList, IonLabel, IonButton, 
],
})
export class HomePage {

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
   // Signal: almacena el texto del campo de búsqueda
  busqueda = signal ('');

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
   // Signal: almacena la lista de elementos
  elementos = signal<Elemento[]> ([
    { id: 1, titulo: 'Comerás flores', categoria: 'Novela contemporánea', escritora: 'Lucía Solla', editorial: 'Asteroide' },
    { id: 2, titulo: 'Han cantado Bingo', categoria: 'Novela contemporánea', escritora: 'Lana Corujo', editorial: 'Reservoir Books' },
    { id: 3, titulo: 'Las gratitudes', categoria: 'Novela contemporánea', escritora: 'Delphine de Vigan', editorial: 'Anagrama' },
    { id: 4, titulo: 'La biblioteca de la Medianoche', categoria: 'Novela contemporánea', escritora: 'Matt Haig', editorial: 'Alianza Editorial' },
    { id: 5, titulo: 'El descontento', categoria: 'Novela contemporánea', escritora: 'Beatriz Serrano', editorial: 'Temas de Hoy' },
  ]);
// TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
// Computed: true si hay elementos en la lista
// Computed: true si hay elementos en la lista
// Computed es una función que devuelve un valor derivado de signals. 
hayElementos = computed(() => this.elementos().length > 0);

  // Computed: filtra elementos según el texto de búsqueda
  elementosFiltrados = computed<Elemento[]>(() => {
    const texto = this.busqueda().toLowerCase();
    return this.elementos().filter(elemento =>
      elemento.titulo.toLowerCase().includes(texto)
    );
  });

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