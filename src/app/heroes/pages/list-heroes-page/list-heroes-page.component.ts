import { Component, OnInit } from '@angular/core';
import { Hero, HeroPaginator } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-heroes-page',
  templateUrl: './list-heroes-page.component.html',
  styleUrls: ['./list-heroes-page.component.scss']
})
export class ListHeroesPageComponent implements OnInit {

  // ############################## Paginator
  public length = 0;
  public pageSize = 6;
  public pageIndex = 0;
  public pageSizeOptions = [6, 12, 18];

  public disabled: boolean = false;

  public pageEvent?: PageEvent;
  // ############################## Paginator

  public heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes(this.pageIndex, this.pageSize)
      .subscribe(res => {
        this.heroes = res.heroes;
        this.length = res.paginator.totalRegisters;
        this.pageIndex = res.paginator.pageIndex;

      });
  }

  newHero(): void {
    this.router.navigateByUrl('/heroes/new');
  }

  onDelete(id: string) {
    this.heroes = this.heroes.filter(h => h.id !== id);
  }

  // ############################## Paginator
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getHeroes();
  }

}
