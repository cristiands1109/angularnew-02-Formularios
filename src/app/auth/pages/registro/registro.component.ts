import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // nombreyapellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  // emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  // noWay(control: FormControl){
  //   const valor = control.value?.toLowerCase().trim();
  //   // console.log(valor);
  //   if (valor === 'chena') {

  //     return {noWay: true}

  //   }
  //   return null;
  // }
  // emailErrorMensaje: string = '';
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vS.nombreyapellido)]],
    email: ['', [Validators.required, Validators.pattern(this.vS.emailPattern)], [this.emailVS]],
    username: ['', [Validators.required, this.vS.noWay]],
    password: ['', [Validators.required, Validators.minLength(6) ]],
    password2: ['', [Validators.required ]],
  },{
    validators: [this.vS.camposIguales('password', 'password2')]
  })

  get emailErrorMensaje(): string {
    const errors = this.miFormulario.get('email')?.errors
    if (errors?.required) {
      return 'El Email es obligatorio'
    }
    if (errors?.pattern) {
      return 'El formato ingresado no corresponde a un correo'
    }
    if (errors?.existeEmail) {
      return 'El mail ingresado ya existe'
    }

    return ''

  }
  constructor(  private fb: FormBuilder,
                private vS: ValidatorService,
                private emailVS: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Christian Duarte',
      email: 'cristiands1109@gmail.com',
      username: 'Christiands1109'
    })
  }


  validar(campo: string) {

   return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched

  }

  // emailRequired() {
  //   return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched
  // }
  // emailFormato() {
  //   return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched
  // }
  // emailTomado() {
  //   return this.miFormulario.get('email')?.errors?.existeEmail && this.miFormulario.get('email')?.touched
  // }

  crear(){
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
    console.log(this.miFormulario.value);
  }

}
