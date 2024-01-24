import {Component, OnInit} from '@angular/core';
import {headersTable} from "../../constants/headersTable";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {map} from "rxjs";
import {filtersObjectArray} from "../../constants/filtersObjectArray";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  headers = headersTable;
  products: Product[] = [];
  filtersObject = filtersObjectArray;
  filterQuery = {category: '', name: '', count: '', price: ''} ;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.tempSetUp();

    // Todo: UnCommit after add personal firebase token
    // this.retrieveProducts();
  }

  filterData(event: any): void {
    switch (event.target.name) {
      case 'category': {
        this.filterQuery.category = event.target.value
        break;
      }
      case 'name': {
        this.filterQuery.name = event.target.value;
        break;
      }
      case 'count': {
        this.filterQuery.count = event.target.value;
        break;
      }
      case 'price': {
        this.filterQuery.price = event.target.value;
        break;
      }
    }
  }

  showProducts () {
    return this.products.filter( item => {
      return item.category?.includes(this.filterQuery.category) && item.name?.includes(this.filterQuery.name)
        && item?.count?.toString().includes(this.filterQuery.count)
        && item?.price?.toString().includes(this.filterQuery.price)
    });
  }

  retrieveProducts(): void {
    // Todo: For filter data please use query where
    this.productService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.products = data;
    });
  }

  tempSetUp(): void {
    for (let i = 0; i < 10000; i++) {
      this.products.push(
        {
          category: `Category ${Math.floor(Math.random() * 10)}`,
          name: `Name${i}`,
          price: Math.floor(Math.random() * 1000),
          count: Math.floor(Math.random() * 100),
        }
      )
    }
  }
}
