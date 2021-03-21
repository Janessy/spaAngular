import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:String;

  constructor( private activatesRoute:ActivatedRoute,
               private _heroesServices:HeroesService) 
  {

  }

  ngOnInit(): void {
    this.activatesRoute.params.subscribe( params => {

      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    })
  }

}
