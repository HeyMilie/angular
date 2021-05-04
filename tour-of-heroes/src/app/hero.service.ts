import { Injectable } from '@angular/core';
import Hero from './types/hero.type';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    { id : 1, name : 'Batman' },
    { id : 2, name : 'Superman' },
    { id : 3, name : 'Spiderman' }
  ];

  constructor() { }

  getHeroes() : Hero[]{
    return this.heroes;
  }

  // getHeroById(id: number): Hero {
  //   return this.heroes.find((hero) => hero.id === id);
  // }

}
