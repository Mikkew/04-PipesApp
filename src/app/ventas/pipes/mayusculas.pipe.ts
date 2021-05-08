import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, enMayusculas: boolean,...args: any[]): string {
    

    //return value.substring(0, 1).toUpperCase().concat(value.substring(1).toLowerCase());
    return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();
  }

}
