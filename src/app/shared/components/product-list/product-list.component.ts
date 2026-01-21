import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Component({
    selector: 'app-product-list',
    imports: [AsyncPipe, DecimalPipe],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
    products$: Observable<Product[]>;

    constructor(private productService: ProductService) {
        this.products$ = this.productService.getAll();
    }

    onCreate(data: Omit<Product, 'id'>) {
        this.productService.create(data);
    }

    onDelete(id: string) {
        this.productService.delete(id);
    }
}
