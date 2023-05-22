import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHeroesPageComponent } from './pages/layout-heroes-page/layout-heroes-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { ListHeroesPageComponent } from './pages/list-heroes-page/list-heroes-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHeroesPageComponent,
    children: [
      {
        path: 'new',
        component: NewHeroPageComponent,
      },
      {
        path: 'list',
        component: ListHeroesPageComponent,
      },
      {
        path: 'hero/:id',
        component: HeroPageComponent,
      },
      {
        path: 'edit/:id',
        component: NewHeroPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
