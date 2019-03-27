import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../models/Pokemon.model';
import { Router } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon$: Pokemon[];
  pokemonSubscription: Subscription;

  constructor(private pokedexService: PokedexService, private router: Router) { }

  ngOnInit() {
    return this.pokedexService.getPokemonName()
      .subscribe(data => this.pokemon$ = data);
  }

}
