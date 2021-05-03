import { splitClasses } from '@angular/compiler';
import { Component } from '@angular/core';


let heroCount = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La tour des héros';
  titleStyle = {'font-family' : 'Arial', 'color' : 'red'};
  username = "Anonymous";
  heros = [
    "Batman",
    "Catwoman",
    "Wonder Woman",
    "Iron Man"
  ];
  heroToAdd = '';
  heroToRemove = '';

  addHero(){
    this.heros.push(this.heroToAdd);
    this.title = 'La tour des ' + this.heros.length + ' héros';
  }

  removeHero(heroToRemove: string) {
    this.heros.forEach((value, index) => {
      if (value == heroToRemove) this.heros.splice(index, 1);
    });
  }
  manageHero(heroToManage: string) {
    this.heros.forEach((value, index) => {
      if (value == heroToManage) this.heros.splice(index, 1);
      else this.heros.push(heroToManage)
    });
  }

}

