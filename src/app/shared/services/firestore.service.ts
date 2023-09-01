import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // Referenciamos coleccion en la base de datos
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id: string){
    // Resolve -> resuelto (similar al then)
    // Reject -> rechazo (similar al catch)
    return new Promise(async(resolve, reject) => {
      // Hace una captura de los datos -> similar screenshots
      try{
        usuario.uid = id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        // Retornara el resultado
        resolve(resultado)
      }catch(error){
        // Retornara el error
        reject(error)
      }
    })
  }
}
