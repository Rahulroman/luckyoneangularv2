import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contestStatus',
  standalone: true
})
export class ContestStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
