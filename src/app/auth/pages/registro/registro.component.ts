import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.nicknameNoValido],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      Validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if( errors?.['required'] ) {
      return 'El email es obligatorio.'
    }
    if( errors?.['pattern']) {
      return 'El email debe estar en un formato valido.'
    }
    if( errors?.['emailExistente']) {
      return 'El email ya se encuentra asociado a una cuenta.'
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Kaoru Tanamachi',
      email: 'test1@test.com',
      username: 'TestUser',
      password: '123456',
      password2: '123456',

    });
  }



  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched;
  }
}

