import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SinglePokemonComponent } from './pokemon-list/single-pokemon/single-pokemon.component';
import { PokemonFormComponent } from './pokemon-list/pokemon-form/pokemon-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PokemonListComponent,
    SinglePokemonComponent,
    PokemonFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
