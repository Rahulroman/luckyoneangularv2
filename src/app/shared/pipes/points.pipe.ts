import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'points',
  standalone: true
})
export class PointsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
