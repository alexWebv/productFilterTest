import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table/table.component";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { FilterInputsComponent } from './filter-inputs/filter-inputs.component';



@NgModule({
  declarations: [TableComponent, FilterInputsComponent],
    exports: [
        TableComponent,
        FilterInputsComponent
    ],
  imports: [
    CommonModule,
    NgbPagination,
    FormsModule
  ]
})
export class SharedModule { }
