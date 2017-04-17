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

  /**
   * list of all pokemons
   */
  public allPokemons:Pokemon[];

  /**
   * Sorted and filtered list of pokemons
   */
  public pokemons: Pokemon[];

  /**
   * Sorting parameters
   * column: name/url
   * type: 1 (asc)/-1(desc)
   */
  public sortColumn: string;
  public sortType: number;
  // {
  //   column: 'name',
  //   type: 1
  // };

  /**
   * filter
   */
  public filter: string;

  /**
   * page number
   */
  public page: number;

  /**
   * limit on the page
   */
  public limit: number;

  /**
   * constructor
   * @param {PokemonService} pokemonService
   */
  constructor(private pokemonService: PokemonService) {
    this.sortColumn = 'name',
    this.sortType = 1
    this.filter = '';
    this.page = 1;
    this.limit = 10;
   }

  /**
   * Getting all pokemon on init
   */
  getPokemons(): void {
     this.pokemonService.getPokemons().subscribe(
      (res) => {
        this.allPokemons = res;
        this.pokemons = res;
      },
      (err) => console.log(err),
      () => true
    );
  }

  /**
   * onInit function
   */
  ngOnInit() {
    this.getPokemons()
    console.log(this)
  }

  /**
   * onClick handler for sorting columns
   * @param {string} column
   */
  onSort(column: string): void {
    console.log(this)
    this.sortType = this.sortColumn === column ? this.sortType === 1 ? -1 : 1 : 1;
    this.sortColumn = column;
  }

  /**
   * onChange handler for handling limit change
   * @param {string} column
   */
  onLimitChange(value): void {
    this.limit = value;
    console.log(value)
  }

  /**
   * onKey handler - handling search input
   * @param {string} column
   */
  onSearch(value): void { // without type info
    this.filter = value;
    console.log(this)
  }
}
