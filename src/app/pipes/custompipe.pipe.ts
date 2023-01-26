import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  
  transform(value: number, ...args: number[]): unknown {
    const[price]=args;
    return value*price
    
  }

}
