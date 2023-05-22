import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroesPageComponent } from './list-heroes-page.component';

describe('ListHeroesPageComponent', () => {
  let component: ListHeroesPageComponent;
  let fixture: ComponentFixture<ListHeroesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHeroesPageComponent]
    });
    fixture = TestBed.createComponent(ListHeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
