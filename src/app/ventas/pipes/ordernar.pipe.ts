import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas,interface';

@Pipe({
  name: 'ordernar'
})
export class OrdernarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordernarPor:string | null = null ): Heroe[] {

    switch (ordernarPor) {
      case "nombre":
        heroes = heroes.sort( (a, b) => (a.nombre > b.nombre) ? 1 : -1 );
        return heroes;

      case "vuela":
        heroes = heroes.sort( (a, b) => (a.vuela > b.vuela) ? -1 : 1 );
        return heroes;

      case "color":
        heroes = heroes.sort( (a, b) => (a.color.toString > b.color.toString) ? 1 : -1 );
        return heroes;

      default:
        return heroes;
    }
  }

}
