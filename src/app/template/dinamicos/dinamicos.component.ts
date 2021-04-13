import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favoritos [];
}

interface Favoritos {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  nuevoFav = '';

  persona: Persona = {
    nombre: 'Christian',
    favoritos: [
      { id: 1, nombre: 'MetalSlung'},
      { id: 2, nombre: 'Dortmund'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }


  guardar(formulario: NgForm) {
    console.log(formulario.value);
    formulario.resetForm();
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }
  agregarFav() {
    const nuevoFavorito: Favoritos = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFav
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoFav = '';
  }
}
