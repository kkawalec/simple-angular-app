import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';

import { PokemonService } from '../services/pokemon.service'
import { Pokemon } from '../models/pokemon'

@Component({
  templateUrl: './pokemon-table.component.html',
})

/**
 * PokemonTableComponent class
 */
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

  /**
   * filter
   */
  public filter: string;

  /**
   * page number
   */
  public page: number;

  /**
   * last page number
   */
  public lastPage: number;

  /**
   * limit on the page
   */
  public limit: number;

  /**
   * pages number for pagination
   */
  public pages: number[];

  /**
   * sorted/filtered rows count
   */
  public rowsCount: number;

  /**
   * starting index of rows on the selected page
   */
  public startIndex: number;

  /**
   * last index of rows on the selected page
   */
  public endIndex: number;

  /**
   * constructor
   * @param {PokemonService} pokemonService
   */
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private localStorageService: LocalStorageService
    ) {
    this.sortColumn = 'name',
    this.sortType = 1
    this.filter = '';
    this.page = 1;
    this.limit = 10;
    this.pages = [];
    this.startIndex = 0;
    this.endIndex = 0;
    this.rowsCount = 0;
   }

  /**
   * Getting all pokemon on init
   */
  getPokemons(): void {
     this.pokemonService.getPokemons().subscribe(
      (res) => {
        this.allPokemons = res;
        this.pokemons = res;
        this.handleChangingParameters()
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
  }

  /**
   * Main handler for table filters/parameters
   */
  handleChangingParameters(): void {
    let tempPokemonArr = this.allPokemons;

    // filtering
    if(this.filter !== '') {
      tempPokemonArr = tempPokemonArr.filter(pok => pok.name.includes(this.filter) || pok.url.includes(this.filter))
    }

    // sorting
    tempPokemonArr = tempPokemonArr.sort((pokA, pokB) => {
      const secondTypeSort = this.sortType === 1 ? -1 : 1;
      return pokA[this.sortColumn] > pokB[this.sortColumn] ? this.sortType : secondTypeSort;

    })

    // count of all rows
    this.rowsCount = tempPokemonArr.length
    // paginate
    // count of all pages
    this.lastPage = Math.ceil(this.rowsCount/this.limit);

    // all pages list
    this.pages = [
        this.page-2,
        this.page-1,
        this.page,
        this.page+1,
        this.page+2
        ].filter(value => (value > this.lastPage || value < 1) ? false : true );

    //starting index of remaining array
    this.startIndex = this.page * this.limit - this.limit;
    this.endIndex = this.page * this.limit - 1;
    tempPokemonArr = tempPokemonArr.filter((pok, index) => index >= this.startIndex && index <= this.endIndex)

    this.pokemons = tempPokemonArr;

    //localstorage
    this.localStorageService.set('pokemonOnPage', this.endIndex-this.startIndex+1);
  }

  /**
   * onClick handler for sorting columns
   * @param {string} column
   */
  onSort(column: string): void {
    this.sortType = this.sortColumn === column ? this.sortType === 1 ? -1 : 1 : 1;
    this.sortColumn = column;
    this.handleChangingParameters()
  }

  /**
   * onChange handler for handling limit change
   * @param {string} column
   */
  onLimitChange(value): void {
    this.limit = value;
    this.page = 1;
    this.handleChangingParameters()
  }

  /**
   * onKey handler - handling search input
   * @param {string} column
   */
  onSearch(value): void {
    this.filter = value;
    this.page = 1;
    this.handleChangingParameters()
  }

  /**
   * onClick handler for pagination
   * @param {number} pageNumber
   */
  onPageChange(pageNumber): void {
    if(pageNumber < 1 || pageNumber > this.lastPage) return;
    this.page = pageNumber;
    this.handleChangingParameters()
  }

  /**
   * checking if pagination link is disabled
   * @param {number} pageNumber
   */
  checkIfDisable(pageNumber): boolean {
    return pageNumber < 1 || pageNumber > this.lastPage;
  }

  gotoDetail(pokemonName): void {
    this.router.navigate(['/detail', pokemonName]);
  }
}
