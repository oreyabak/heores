import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutHeroesPageComponent } from './pages/layout-heroes-page/layout-heroes-page.component';
import { ListHeroesPageComponent } from './pages/list-heroes-page/list-heroes-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutHeroesPageComponent,
    ListHeroesPageComponent,
    HeroPageComponent,
    NewHeroPageComponent,
    SearchHeroComponent,
    HeroCardComponent,

    // Pipes
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class HeroesModule { }
