import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeroComponent } from './search-hero.component';

describe('SearchHeroPageComponent', () => {
  let component: SearchHeroComponent;
  let fixture: ComponentFixture<SearchHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHeroComponent]
    });
    fixture = TestBed.createComponent(SearchHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
