import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }


  public nombreyapellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  noWay(control: FormControl): ValidationErrors | null {
    const valor = control.value?.toLowerCase().trim();
    // console.log(valor);
    if (valor === 'chena') {

      return {noWay: true}

    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const password = formGroup.get(campo1)?.value
      const password2 = formGroup.get(campo2)?.value  
      if (password !== password2) {
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return {noIguales: true}
      }
      formGroup.get(campo2)?.setErrors(null)
      return null;
    }

  }








}
