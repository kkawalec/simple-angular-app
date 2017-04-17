// Import component decorator
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { PokemonService } from '../services/pokemon.service'
import { Pokemon } from '../models/pokemon'

@Component({
  templateUrl: './pokemon-table.component.html',
})

// Component class
export class PokemonTableComponent implements OnInit {
  pokemons:Pokemon[];

  constructor(private pokemonService: PokemonService) {

  }

  getPokemons(): void {
     this.pokemonService.getPokemons().subscribe(
      (res) => this.pokemons = res,
      (err) => console.log(err),
      () => true
    );
  }


  ngOnInit() {
    this.getPokemons()
    console.log(this)
  }
}
