import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Archivo de rutas
import { AdminRoutingModule } from './admin-routing.module';

// Vista
import { AdminComponent } from './pages/admin/admin.component';

// Component
import { TableComponent } from './components/table/table.component';

// Material
import { MatIconModule } from '@angular/material/icon';

// Para que funcione el formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    // Para que funcione el formulario
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    AdminComponent,
    MatIconModule
  ]
})
export class AdminModule { }
