import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdernarComponent } from './pages/ordernar/ordernar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdernarPipe } from './pipes/ordernar.pipe';
import { ColorPipe } from './pipes/color.pipe';



@NgModule({
  declarations: [
    NumerosComponent, 
    NoComunesComponent, 
    BasicosComponent, 
    OrdernarComponent, 
    MayusculasPipe, 
    VuelaPipe, 
    OrdernarPipe, 
    ColorPipe,
  ],
  exports: [
    NumerosComponent, 
    NoComunesComponent, 
    BasicosComponent, 
    OrdernarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class VentasModule { }
