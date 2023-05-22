import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-heroes-page',
  templateUrl: './layout-heroes-page.component.html',
  styleUrls: ['./layout-heroes-page.component.scss']
})
export class LayoutHeroesPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url:'./list' },
    { label: 'Añadir', icon: 'add', url:'./new' },
  ];

}
