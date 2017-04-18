import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { PokemonService } from '../services/pokemon.service'

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent implements OnInit {
  /**
   * Pokemon details from API object
   */
  public pokemon: Object;

  /**
   * Error
   */
  public error: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.error = null;
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.pokemonService.getPokemonByName(params['name']))
      .subscribe(
        pokemon => this.pokemon = pokemon,
        err => this.error = err
      );
  }

  /**
   * handler for back button
   */
  goBack(): void {
    this.location.back();
  }
}
