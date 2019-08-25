import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService:HeroesService) { }

  ngOnInit() {

    // con esta funcion capturo el texto del input y lo envio al servicio 
    // para que se procese y se haga la redireccion

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes( params['termino'] );
    });

  }

}
