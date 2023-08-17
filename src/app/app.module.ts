import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';0

//Componentes globales
import { SharedModule } from './shared/shared.module';

//Firebase
//Nos conectamos con la BD y nos trae modulos necesarios
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //Cloud firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth' //Autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage' //Imágenes

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Configuracion de los modulos de Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
