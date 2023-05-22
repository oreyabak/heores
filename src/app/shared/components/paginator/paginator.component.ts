import { Component } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'shared-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  public length = 50;
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [6, 12, 18];

  public hidePageSize: boolean = false;
  public showPageSizeOptions: boolean = true;
  public showFirstLastButtons: boolean = true;
  public disabled: boolean = false;

  public pageEvent?: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
