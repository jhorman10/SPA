import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any={};

  constructor(private activateRoute: ActivatedRoute,
              private heroeService:HeroesService) { 

    this.activateRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe(params['id']);
    });

  }

}
