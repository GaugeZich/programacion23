import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productoCollection: AngularFirestoreCollection<Producto>
  
  constructor(private database: AngularFirestore) {
    this.productoCollection = database.collection('productos')
  }

  // CRUD -> Productos
  crearProductos(producto: Producto){
    
  }
}
