import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textcase'
})
export class TextcasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
