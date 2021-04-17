import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre:     new FormControl('Lapiz'),
  //   precio:     new FormControl(2000),
  //   existencias: new FormControl(20),
    
  // })
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({

      nombre: 'Lapiz',
      precio: 2000,
      
    })
  }

  noEsValido(campo: string) {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
