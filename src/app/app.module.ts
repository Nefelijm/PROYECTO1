import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent,ContenidoComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { OrdenComponent } from './components/orden/orden.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ContenidoComponent,
    OrdenComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [],
  entryComponents: [ContenidoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
