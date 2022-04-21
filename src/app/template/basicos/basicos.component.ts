import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild( 'miFormulario' ) miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080Ti',
    precio: 1400,
    existencias: 25
  }
  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid
            && this.miFormulario?.controls['producto']?.touched
  };

  precioValido(): boolean{
    return this.miFormulario?.controls['precio']?.value < 0
            && this.miFormulario?.controls['precio']?.touched
  }
  guardar(){
    //console.log( this.miFormulario );
    console.log('posteo correcto');

    this.miFormulario.resetForm({
      producto: 'Item agregado',
      precio: 0,
      existencias: 0
    });
  }

}
