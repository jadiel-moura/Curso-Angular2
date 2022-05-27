import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe'

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
//export class FiltroArrayImpuroPipe implements PipeTransform {
  export class FiltroArrayImpuroPipe extends FiltroArrayPipe {



}
