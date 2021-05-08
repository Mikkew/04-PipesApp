import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = "Maria";
  genero: string = "femenino";

  constructor() { }

  ngOnInit(): void {
  }

  inivitacionMapa = {
    'masculino': 'inivitarlo',
    'femenino': 'inivitarla'
  }

  //i18nPlural
  clientes: string[]= ['Maria', 'Pedro', 'Olga', 'Leonardo', 'Paola', 'Iker'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona():void {
    if( this.genero === "femenino"){
      this.nombre = 'Leonardo';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Maria';
      this.genero = 'femenino';
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: "Miguel",
    edad: 27,
    ciudad: "Puebla, México"
  }

  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Wonder Woman",
      vuela: true
    },
    {
      nombre: "Batman",
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data de la promesa')
    }, 3500);
  })

}
