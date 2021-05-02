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
  addHero(){
    this.heros.push(this.heroToAdd);
    this.title = 'La tour des ' + this.heros.length + ' héros';
  }

  heroToRemove = '';
  removeHero(){

    }
  


}
