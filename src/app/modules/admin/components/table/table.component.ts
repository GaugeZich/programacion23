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

  productosSeleccionado!: Producto; // ! -> Recibir valores vacíos

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

}
