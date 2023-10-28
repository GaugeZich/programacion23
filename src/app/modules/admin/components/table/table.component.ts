import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionProductos: Producto[] = []; // Creamos coleccion basada en interfaz Producto

  productoSeleccionado!: Producto; // ! -> Recibir valores vacíos

  modalVisibleProducto: boolean = false;

  // Formulario
  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required),
  })

  constructor(
    public servicioCrud: CrudService // Patentamos servicio de forma local
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto
    })
  }

  async agregarProducto(){
    if(this.producto.valid){
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
      };
      // Llamamos al servicioCrud, función crearProducto; seteamos nuevoProducto
      await this.servicioCrud.crearProductos(nuevoProducto)
      .then(producto => { 
        alert("Ha agregado un nuevo producto con exito :)")
      })
      .catch(error => {
        alert("Hubo un error al cargar nuevo producto :( \n"+error)
      })
    }
  }

  // Editar producto -> Vincula al modal de editar
  mostrarEditar(productoSeleccionado: Producto){
    this.productoSeleccionado = productoSeleccionado;

    /*
    Retomamos y enviamos los valores de ese producto
    seleccionado, el ID no se vuelve a enviar porque
    no se modifica
    */
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      descripcion: productoSeleccionado.descripcion,
      precio: productoSeleccionado.precio,
      categoria: productoSeleccionado.categoria
    })
  }
  
  // Vinvula a boton "guardar cambios"
  editarProducto(){
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto,
      // Signo de exclamación "!" -> Puede recibir valores vacíos al inicializar
      nombre: this.producto.value.nombre!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      descripcion: this.producto.value.descripcion!,
      precio: this.producto.value.precio!,
      categoria: this.producto.value.categoria!
    }

  this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
  .then(producto => {
    alert("El producto fue modificado con exito.");
  })
  .catch(error => {
    alert("No se pudo modificar el producto \n"+error)
  })
  }


  // Eliminar producto
  mostrarBorrar(productoSeleccionado: Producto){ // Boton para el modal
    this.modalVisibleProducto = true;
    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert("El producto ha sido elminado correctamente");
    })
    .catch(error => {
      alert("No se ha podido eliminar el producto: \n"+error)
    })
  }
}
