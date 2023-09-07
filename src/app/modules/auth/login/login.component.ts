import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    rol: '',
    email: '',
    contrasena: ''
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
  ){}

  async iniciar(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    // Metodo then -> cuando funciona correctamente
    .then(res => {
      alert("Ha accedido con éxito :)");
      console.log(credenciales.email);

      this.router.navigate(['/inicio']);
    })
    // Metodo then -> encapsula un fallo
    .catch(error => {
      alert("Hubo un error al iniciar sesion :( \n"+error);
      console.log(credenciales.email);
    })
  }
  // Llamamos funcion para cerrar sesion
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert("Se ha cerrado la sesion correctamente");
      console.log(res);
      this.router.navigate(['/inicio'])
    })
  }
}
