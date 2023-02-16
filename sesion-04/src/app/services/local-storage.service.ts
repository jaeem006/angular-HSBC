import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  almacenar(llave: string, valor: any) {
    localStorage.setItem(llave, JSON.stringify(valor));
  }

  consultar(llave: string) {
    return JSON.parse(localStorage.getItem(llave)|| '');
  }

  borrar(llave: string) {
    localStorage.removeItem(llave);
  }

  limpiarTodo() {
    localStorage.clear();
  }
}
