// Import component decorator
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { PetService } from '../services/pet.service'

@Component({
  templateUrl: './cats-table.component.html',
})

// Component class
export class CatsTableComponent implements OnInit {
  pokemons:string[];

  constructor(private petService: PetService) {

  }

  ngOnInit() {
    // Pass retreived pets to the property
     this.petService.getPokemons().subscribe(
      (res) => this.pokemons = res,
      (err) => console.log(err),
      () => true
    );
    // this.cats.subscribe(res => console.log(res), err => console.log(err))
    // console.log(this.cats)
  }
}
