// currency-cfa.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCFA'
})
export class CurrencyCfaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (typeof value !== "number") {
      return value;
    }
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }

}
