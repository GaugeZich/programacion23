import { Component, OnInit} from '@angular/core';
import { TarjetasInicio } from 'src/app/models/modelos';
import { Boca } from 'src/app/models/boca';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Propiedad publica (Tipo array)
  
  public jugador: Boca[];
  //Inicializa la propiedad info
  constructor(){
    this.jugador = [
      {
        id: "1",
        nombre: "Medina",
        equipo_anterior: "Inferiores",
        dorsal: "36",
        imagen: "https://www.lanacion.com.ar/resizer/K_esfrtbQ8Oedjfw235bc_YQZy4=/420x280/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUYNQ53VNVCHLMV4PIRZLSE7EE.JPG",
        alt: "Cristian Medina"
      },
      {
        id: "2",
        nombre: "Merentiel",
        equipo_anterior: "Palmeiras",
        dorsal: "16",
        imagen: "https://pbs.twimg.com/media/Fp3FRBkWIAA_Lx7.jpg",
        alt: "Miguel Merentiel"
      },
      {
        id: "3",
        nombre: "Barco",
        equipo_anterior: "Inferiores",
        dorsal: "19",
        imagen: "https://tntsports.com.ar/__export/1691634929917/sites/tntsports/img/2023/08/09/boca_gol_colo_barco.jpg_2133781157.jpg",
        alt: "Valentin \"Colo\" Barco"
      }
    ]
  }

  //Evento de construccion / inicializacion
  ngOnInit(): void{

  }
}
