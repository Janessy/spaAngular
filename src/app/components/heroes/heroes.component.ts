import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = []; 

  constructor( private _heroesService: HeroesService) {
    console.log("Constructor");
  }

  ngOnInit(): void { //renderizar la pagina
    this.heroes = this._heroesService.getHeroes();

    console.log( this.heroes );
  }

}
