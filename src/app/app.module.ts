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
import { AuthService } from './services/auth.service';
import { PokemonService } from './services/pokemon.service';
import { AuthGuardService } from './services/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    PokemonService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
