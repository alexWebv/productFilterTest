import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilterModel} from "../../models/filter.model";

@Component({
  selector: 'app-filter-inputs',
  templateUrl: './filter-inputs.component.html',
  styleUrl: './filter-inputs.component.scss'
})
export class FilterInputsComponent {
  @Input() filtersObjectArray: FilterModel[] = [];
  @Output() onChanged = new EventEmitter<KeyboardEvent>();
  change(e: any) {
    this.onChanged.emit(e);
  }
}
