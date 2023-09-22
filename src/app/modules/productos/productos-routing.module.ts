import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CamisetasComponent } from './pages/camisetas/camisetas.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';

const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"camisetas",component:CamisetasComponent
  },
  {
    path:"botines",component:BotinesComponent
  },
  {
    path:"pantalones",component:PantalonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
