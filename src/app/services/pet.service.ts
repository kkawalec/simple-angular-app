// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import 'rxjs/add/operator/map'

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class PetService {

  // Class constructor with Jsonp injected
  constructor(private http: Http) { }

  // Base URL for Petfinder API
  private todosUrl = 'http://pokeapi.co/api/v2/generation/1';

  getPokemons() {
    // Return response
    return this.http
      .get(this.todosUrl )
      .map(response => <string[]> response.json().pokemon_species);
  }

  // get a pet based on their id
  findPetById(id: string) {

    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'pet.get'

    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinating
    let params1 = new URLSearchParams();
    params1.set('key', '[API_KEY]');
    params1.set('id', id);
    params1.set('format', 'json');
    params1.set('callback', '?');

    // Return response
    // return this.jsonp
    //           .get(this.petsUrl + endPoint, { search: params1 })
             // .map(response => <string[]> response.json().petfinder.pet);
  }
}
