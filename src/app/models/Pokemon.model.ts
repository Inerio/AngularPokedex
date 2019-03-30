import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class Pokemon {
    constructor(
        public name: string,
        public url: string,
    ) {}
}

@Injectable({
    providedIn: 'root'
})
export class PokemonAdapter implements Adapter<Pokemon> {

    adapt(item: any): Pokemon {
        return new Pokemon(
            item.name,
            item.url,
        );
    }
}
