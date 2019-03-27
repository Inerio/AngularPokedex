import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private _http: HttpClient) {}

  getPokemonName() {
    return this._http.get<Pokemon[]>(this.pokeUrl);
  }
}
