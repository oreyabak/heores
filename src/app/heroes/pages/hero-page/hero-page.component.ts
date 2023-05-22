import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, delay } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        //delay(1000),
        switchMap(({ id }) => this.heroesService.getHeroById( id ))
      ).subscribe(hero => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }

  goBack() {
    this.router.navigateByUrl('heroes/list');
  }

}
