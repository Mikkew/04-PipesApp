import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 255235432.556732;
  porcentaje: number = 0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
