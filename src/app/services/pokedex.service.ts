import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonAdapter } from '../models/Pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20&results';

  constructor(
    private _http: HttpClient,
    private adapter: PokemonAdapter,
    ) {}

  list(): Observable<Pokemon[]> {
    const url = `${this.pokeUrl}/`;
    return this._http.get(url).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }
}
