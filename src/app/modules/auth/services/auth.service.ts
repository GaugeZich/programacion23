import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Referenciar autentificacion de FireBase
  constructor(public auth: AngularFireAuth) { }

  // Funcion para returnar nueva informacion de FireBase
  registrar(nombre: string, contrasena: string){
    // Funcion para retornar nueva informacion de register
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena);
  }
}
