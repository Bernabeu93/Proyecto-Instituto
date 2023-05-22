import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: string[] = [];

  // Agrega un mensaje al array de mensajes
  agregarMensaje(mensaje: string) {
    this.mensajes.push(mensaje);
  }

  // Limpia el array de mensajes, eliminando todos los mensajes almacenados
  limpiarMensajes() {
    this.mensajes = [];
  }

  constructor() { }
}
