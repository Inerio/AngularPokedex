import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from './pokemon-list/pokemon-form/pokemon-form.component';
import { SinglePokemonComponent } from './pokemon-list/single-pokemon/single-pokemon.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'pokemon/new', component: PokemonFormComponent },
  { path: 'pokemon/view/:id', component: SinglePokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
