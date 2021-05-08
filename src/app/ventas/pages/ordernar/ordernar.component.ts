import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas,interface';

@Component({
  selector: 'app-ordernar',
  templateUrl: './ordernar.component.html',
  styleUrls: ['./ordernar.component.css']
})
export class OrdernarComponent implements OnInit {

  enMayusculas: boolean = false;
  ordernarPor : string | null = null;
  heroes: Heroe[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "Wonder Woman",
      vuela: true,
      color: Color.dorado
    },
    {
      nombre: "Flash",
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: "Linterna Verde",
      vuela: true,
      color: Color.verde
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Aquaman",
      vuela: false,
      color: Color.naranja
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ): void {
    this.ordernarPor = valor;
  }

}
