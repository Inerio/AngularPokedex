import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from './pokemon-list/pokemon-form/pokemon-form.component';
import { SinglePokemonComponent } from './pokemon-list/single-pokemon/single-pokemon.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'pokemon', canActivate: [AuthGuardService], component: PokemonListComponent },
  { path: 'pokemon/new', canActivate: [AuthGuardService], component: PokemonFormComponent },
  { path: 'pokemon/view/:id', canActivate: [AuthGuardService], component: SinglePokemonComponent },
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: '**', redirectTo: 'pokemon' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
