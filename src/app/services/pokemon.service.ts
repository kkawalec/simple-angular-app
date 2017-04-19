import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';

import { Pokemon } from '../models/pokemon';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class PokemonService {
  /**
   * Base URL
   */
  private generationUrl = 'http://pokeapi.co/api/v2/generation/1/';

  constructor(private http: Http) { }

  /**
   * Get all pokemons from 1 generation
   */
  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get(this.generationUrl )
      .map(response =>  response.json().pokemon_species);
  }

  /**
   * Get pokemon details by name
   * @param {string} name
   */
  getPokemonByName(name: string): Observable<Object> {
    return this.http
      .get(`http://pokeapi.co/api/v2/pokemon/${name}/`)
      .map(response =>  response.json());
  }
}
