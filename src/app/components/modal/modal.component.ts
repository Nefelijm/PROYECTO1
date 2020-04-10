import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent   {
  


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContenidoComponent, {
      height: '100%',
      width: '100%'
    });
  }
}


@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
})

export class ContenidoComponent {
  mostrar:boolean = false;
  palabra:string = 'More';
  constructor(
    public dialogRef: MatDialogRef<ContenidoComponent>,

   ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  show(){
  this.mostrar = !this.mostrar
  if (this.mostrar === false) {
    this.palabra = "More"
  }else{
    this.palabra = "Less"
  }
  }



}
