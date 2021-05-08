import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = "leonardo";
  nombreUpper: string = "leonardo";
  nombreCompleto: string = "LeOnArDo";

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
