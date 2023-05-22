import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConsentDialogComponent } from 'src/app/shared/components/consent-dialog/consent-dialog.component';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() public hero!: Hero;
  @Output() public onDelete = new EventEmitter<string>();

  public showDeleteHero: boolean = false;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required');
  }

  openConsentDialog() {
    const dialogRef = this.dialog.open(ConsentDialogComponent, {
      data: `¿Desea eliminar el héroe "${this.hero.superhero}"?`
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.heroesService.deleteHeroById(this.hero.id)
          .subscribe(res => {
            if (res) this.onDelete.emit(this.hero.id);
          });
      }
    });
  }
}
