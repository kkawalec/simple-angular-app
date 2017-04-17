// Import component decorator
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { PetService } from '../services/pet.service'
import { Pokemon } from '../models/pokemon'

@Component({
  templateUrl: './cats-table.component.html',
})

// Component class
export class CatsTableComponent implements OnInit {
  pokemons:Pokemon[];

  constructor(private petService: PetService) {

  }

  getPokemons(): void {
     this.petService.getPokemons().subscribe(
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
