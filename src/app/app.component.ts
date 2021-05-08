import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = "Miguel Medina Secundino";
  valor: number = 1000;
  obj:any = {
    nombre: "Leonardo"
  }

  constructor( private primengConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  mostrarNombre(): void  {
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

}
