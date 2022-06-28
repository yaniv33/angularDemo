import { Pipe, PipeTransform } from '@angular/core';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
// create pipe with new > angualr schematic > pipe
@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  transform(value: any, exponent1: any,exponent2: any): number {
    let exp = parseFloat(exponent2);
    console.log('hey: ', value, exponent1,exponent2, exp);
    return Math.pow(value, isNaN(exp) ? 1 : exp);

  }
  //
  // transform(value: any, val: string): string {
  //   return val+ 'dd';
  //
  // }

}
