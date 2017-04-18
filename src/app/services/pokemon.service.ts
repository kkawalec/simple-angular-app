import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Pokemon } from '../models/pokemon'
import {Observable } from 'rxjs/Rx';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class PokemonService {
  constructor(private http: Http) { }

  /**
   * Base URL
   */
  private generationUrl = 'http://pokeapi.co/api/v2/generation/1/';

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
