import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): string {
    return (!hero.id || !hero.alt_img) ? 'assets/no-image.png': hero.alt_img;
  }

}
