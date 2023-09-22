import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CardComponent } from './components/card/card.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CamisetasComponent } from './pages/camisetas/camisetas.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';


@NgModule({
  declarations: [
    CardComponent,
    ProductosComponent,
    CamisetasComponent,
    BotinesComponent,
    PantalonesComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    CardComponent,
    ProductosComponent,
    CamisetasComponent,
    BotinesComponent,
    PantalonesComponent
  ]
})
export class ProductosModule { }
