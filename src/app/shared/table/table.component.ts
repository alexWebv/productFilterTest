import {Component, Input, OnChanges} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges {
  @Input() headers: string[] = [];
  @Input() arrayValues: Product[] = [];
  showArray: { price?: number; name?: string; count?: number; id: number | string; category?: string }[] = [];
  page = 1;
  pageSize = 10;

  ngOnChanges() {
    this.refreshPagination();
  }

  constructor() {
    // Use MacroJs Task for simple manipulation
    setTimeout(() => {
      this.refreshPagination();
    })
  }

  refreshPagination() {
    this.showArray = this.arrayValues?.map((item, i) => ({ id: i + 1, ...item })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
