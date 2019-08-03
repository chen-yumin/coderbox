import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberRound' })
export class NumberRoundPipe implements PipeTransform {
  transform = (number: number) => Math.round(number);
}