import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { Router } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {

  pokemon: Pokemon[];

  constructor(private router: Router, private pokedexService: PokedexService) {
    this.pokemon = [];
  }

  ngOnInit() {
    this.pokedexService.list().subscribe((pokemon: Pokemon[]) => {
      this.pokemon = pokemon;
    });
  }

}
