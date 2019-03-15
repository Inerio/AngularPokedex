import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from '../models/Pokemon.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: Pokemon[] = [];
  pokemonSubject = new Subject<Pokemon[]>();

  emitPokemon() {
    this.pokemonSubject.next(this.pokemon);
  }

  getPokemon() {
    firebase.database().ref('/pokemon')
      .on('value', (data) => {
          this.pokemon = data.val() ? data.val() : [];
          this.emitPokemon();
        }
      );
  }

  getSinglePokemon(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/pokemon/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  constructor() {
    this.getPokemon();
  }

}
