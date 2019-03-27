import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SinglePokemonComponent } from './pokemon-list/single-pokemon/single-pokemon.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PokedexService } from './services/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PokemonListComponent,
    SinglePokemonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
