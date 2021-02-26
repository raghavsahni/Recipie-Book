import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mlPipe'
})
export class MlPipePipe implements PipeTransform {

  transform(value: any): any {
    return value + 'ml';
  }

}
