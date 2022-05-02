import { Component,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  /* Formulario se puede crear con el servicio FormBuilder */
  /* miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 4080TI'),
    'precio': new FormControl(1800),
    'existencias': new FormControl( 4 ),
  }); */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ 'RTX 4080Ti', [ Validators.required, Validators.minLength(3) ] ],
    precio: [ 0, [ Validators.required, Validators.min(10) ] ],
    existencias: [ 5, [Validators.required, Validators.min(0)] ],
  })
  constructor( private formBuilder: FormBuilder ) {

  }
}
