import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../models/Pokemon.model';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemon: Pokemon[];
  pokemonSubscription: Subscription;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.pokemonSubscription = this.pokemonService.pokemonSubject.subscribe(
      (pokemon: Pokemon[]) => {
        this.pokemon = pokemon;
      }
    );
    this.pokemonService.emitPokemon();
  }

  onViewPokemon(id: number) {
    this.router.navigate(['/pokemon', 'view', id]);
  }

  ngOnDestroy() {
    this.pokemonSubscription.unsubscribe();
  }

}
