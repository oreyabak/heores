import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class HeroCacheService {

  private CACHE_NAME: string = 'heroCache';

  public cacheStore: CacheStore = {
    list: {
      search: '',
      length: 0,
      pageSize: 6,
      pageIndex: 0
    },
  };

	constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  public saveToLocalStorage(): void {
    localStorage.setItem(this.CACHE_NAME, JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem(this.CACHE_NAME)) return;
    this.cacheStore = JSON.parse(localStorage.getItem(this.CACHE_NAME)!);
  }
}

