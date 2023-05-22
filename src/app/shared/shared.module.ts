import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConsentDialogComponent } from './components/consent-dialog/consent-dialog.component';
import { LowerTextDirective } from './directives/lower-text.directive';




@NgModule({
  declarations: [
    Error404PageComponent,
    LoadingSpinnerComponent,
    PaginatorComponent,
    ConsentDialogComponent,
    LowerTextDirective,
  ],
  imports: [
    MatPaginatorModule,
  ],
  exports: [
    Error404PageComponent,
    LoadingSpinnerComponent,
    PaginatorComponent,
    ConsentDialogComponent,
    LowerTextDirective,
  ],
})
export class SharedModule { }
