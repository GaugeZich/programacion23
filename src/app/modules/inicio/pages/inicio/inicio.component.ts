import { Component, OnInit} from '@angular/core';
import { TarjetasInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Propiedad publica (Tipo array)
  public info: TarjetasInicio[];

  //Inicializa la propiedad info
  constructor(){
    this.info = [
      {
        titulo:"Tarjeta 1",
        descripcion:"Jugador lateral o extremo de boca, viene de las inferiores y la esta rompiendo en la primera del futbol argentino",
        imagen:"https://fotos.perfil.com/2023/05/19/trim/720/410/barco-1571619.jpg",
        alt:"Valentin \"Colo\" Barco"
      }
    ]
  }

  //Evento de construccion / inicializacion
  ngOnInit(): void{

  }
}
