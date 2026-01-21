import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class PriceCalculationService {
    constructor() {}

    calculateTotla(products: Product[]): number {
        return products.reduce((sum, i) => sum + i.pricePerPack, 0);
    }
}
