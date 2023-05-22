import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap, Subject } from 'rxjs';
import { Hero, HeroPaginator } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';
import { HeroCacheService } from './hero-cache.service';

@Injectable({ providedIn: 'root' })
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(
    private http: HttpClient,
    private heroCacheService: HeroCacheService,
  ) { }

  getHeroes(page: number, registerByPage: number): Observable<HeroPaginator> {

    let hp: HeroPaginator = {
      heroes: [], // resp.body as Hero[];
      paginator: {
        totalRegisters: 0,
        countPages: 0,
        pageIndex: page,
        registerPage: registerByPage
      }
    }
    let start = registerByPage * page;
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?_start=${start}&_limit=${registerByPage}`, { observe: 'response' })
      .pipe(
        map(_rep => {
          if (_rep.body) hp.heroes = _rep.body;

          let strTotal = _rep.headers.get('X-Total-Count');
          let total = (strTotal) ? Number(strTotal) : 0;
          hp.paginator.totalRegisters = total;

          if (hp.paginator.totalRegisters > 0) {
            hp.paginator.countPages = Math.floor(total / registerByPage) + ((total % registerByPage) > 0 ? 1 : 0);
          }

          // this.heroCacheService.cacheStore.list.length = hp.paginator.countPages;
          // this.heroCacheService.cacheStore.list.pageIndex = page;
          // this.heroCacheService.cacheStore.list.pageSize = registerByPage;
          // this.heroCacheService.saveToLocalStorage();

          return hp;
        })
      );
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(err => of(false)),
        map(resp => true)
      );
  }

}
