import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // Input de contraseña
  
  // Definimos de forma publica el servicio Auth
  constructor(public servicioAuth: AuthService){}

    // Importacion del modelo
    usuarios: Usuario = {
      uid: '',
      nombre: '',
      contrasena: ''
    }
  
    // Tomando nuevo registro
    // async: Una funcion asincronica se utiliza para tomar datos de internet
    async registrarse(){
      const credenciales={
        nombre: this.usuarios.nombre,
        contrasena: this.usuarios.contrasena
      }
      const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contrasena)
      .then(res =>{
        alert("Ha agregado un nuevo usuario con exito")
      })
      console.log(res)
    }
}
