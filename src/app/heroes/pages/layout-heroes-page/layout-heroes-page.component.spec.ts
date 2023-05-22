import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeroesPageComponent } from './layout-heroes-page.component';

describe('LayoutHeroesPageComponent', () => {
  let component: LayoutHeroesPageComponent;
  let fixture: ComponentFixture<LayoutHeroesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHeroesPageComponent]
    });
    fixture = TestBed.createComponent(LayoutHeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
