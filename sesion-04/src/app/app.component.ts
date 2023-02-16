import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { LocalStorageService } from './services/local-storage.service';
import { BeersService } from './services/api/beers.service';
import { UsuarioModelo } from './models/usuario.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sesion04';

  public usuario! : UsuarioModelo;
  public beerData : any;

  constructor(private usuarioService: UsuarioService, private localStorageService : LocalStorageService, private beersService : BeersService){}

  ngOnInit() : void {
    // this.usuarioService.setUsuario({nombre:"Juan",edad:16,curso:"React"})
    this.usuario = this.usuarioService.getUsuario();
    this.usuario = {nombre : "Andrea", edad: 40, curso: "Java"}
    console.log(this.usuarioService.getUsuario())
    this.localStorageService.almacenar("JWT", "HOLAAAA ESTE ES UN JWT");
    this.consulta();
  }

  consulta(): void {
    this.beersService.getBeers().subscribe(res => {
      console.log(res);
      this.beerData = res;
    }, (error: any) => {
      console.log(error)
    })
  }

}
