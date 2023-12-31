import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from '../app-routing.module';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    //Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
