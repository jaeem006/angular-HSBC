import { Injectable } from '@angular/core';
import { UsuarioModelo } from '../models/usuario.modelo'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario!: UsuarioModelo;

  constructor() { 
    this.usuario = { nombre : "Javier", edad: 26, curso : "Angular"}
  }

  getUsuario() {
    return this.usuario;
  }

  setUsuario( usuario : UsuarioModelo ){
    this.usuario = usuario;
  }

}
