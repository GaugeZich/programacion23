import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // Input de contraseña
  
  // Definimos de forma publica el servicio Auth
  constructor(public servicioAuth: AuthService,
      public servicioFirestore: FirestoreService
    ){}

    // Importacion del modelo
    usuarios: Usuario = {
      uid: '',
      nombre: '',
      contrasena: ''
    }
  
    uid = '';

    // Creamos nueva coleccion para usuarios
    coleccionUsuarios: Usuario[] = [];

    // Tomando nuevo registro
    // async: Una funcion asincronica se utiliza para tomar datos de internet
    async registrarse(){
      const credenciales={
        nombre: this.usuarios.nombre,
        contrasena: this.usuarios.contrasena
      }
      const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contrasena)
      // Metodo Then devuelve misma promesa
      .then(res =>{
        alert("Ha agregado un nuevo usuario con exito :)")
      })
      // Metodo Catch creara un error en caso de que algo salga mal
      .catch(error =>
        alert("Hubo un error al crea el usuario :( \n" + error)
        );

        // Creamos constante UID para el UID que obtengamos
        const uid = await this.servicioAuth.getUid();

        // Referenciamos el uid nuevo con el de usuario
        this.usuarios.uid = uid;

        // Llamamos funcion guardarUser
        this.guardarUser();
    }
  
    // Funcion asincrona para guardar usuarios
    async guardarUser(){
      this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res =>{
        console.log(this.usuarios)
      })
      .catch(error =>{
        console.log('Error =>', error)
      })
    }

    async ngOnInit(){
      const uid = await this.servicioAuth.getUid();
      console.log(uid);
    }
}
