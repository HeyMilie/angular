import { Component } from '@angular/core';


let heroCount =2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La tour des héros';
  titleStyle = {'font-family' : 'Arial', 'color' : 'red'};
  //username = "Anonymous";

  heroToAdd = '';
  addHero(){
    // this.heroes.push(this.heroToAdd);
    // this.title = 'La tour des ' + this.heroes.length + ' héros';
  }
}
