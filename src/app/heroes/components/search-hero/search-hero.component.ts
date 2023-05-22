import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})
export class SearchHeroComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    ) { }

  searchHero() {
    const value: string = this.searchInput.value || '';
    if (value === '') {
      this.heroes = [];
    }
    else {
      this.heroesService.getSuggestions(value)
      .subscribe(heroes => this.heroes = heroes );
    }
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
    this.router.navigateByUrl(`/heroes/hero/${hero.id}`);
  }
}
