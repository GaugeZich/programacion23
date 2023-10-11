import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosCollection: AngularFirestoreCollection<Producto>
  
  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('productos')
  }

  // CRUD -> Productos
  crearProductos(producto: Producto){
    return new Promise(async(resolve,reject) =>{
      try{
        // Creamos constante que guarde un nuevo ID
        const idProducto = this.database.createId();

        // Se lo asignamos al atributo ID de la interfaz producto
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto)

        resolve(resultado);
      }catch (error){
        reject(error);
      }
    })
  }
  obtenerProducto(){
    // snapshotChanges -> Toma captura del estado de los datos
    // pipe -> funciona como tuberia, retorna el nuevo arreglo
    // map -> "mapea" o recorre esa nueva información
    // a -> resguarda la nueva información y la envia
    return this.productosCollection.snapshotChanges().
    pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  // Enviamos el ID del producto y la nueva información
  modificarProducto(idProducto: string, nuevaData: Producto){
    return this.database.collection('productos').doc(idProducto).update(nuevaData);
  }

  eliminarProducto(idProducto: string){
    return new Promise((resolve, reject) => {
      try{
        const resp = this.productosCollection.doc(idProducto).delete()
        resolve(resp)
      }
      catch(error){
        reject(error)
      }
    })
  }
}
