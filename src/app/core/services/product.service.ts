import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private readonly collectionPath = 'products';

    constructor(private firestore: FirestoreService) {}

    getAll(): Observable<Product[]> {
        return this.firestore.collection$<Product>(this.collectionPath);
    }

    create(data: Omit<Product, 'id'>) {
        const id = uuid();
        return this.firestore.set(`${this.collectionPath}/${id}`, data);
    }

    update(id: string, data: Partial<Product>) {
        return this.firestore.update(`${this.collectionPath}/${id}`, data);
    }

    delete(id: string) {
        return this.firestore.delete(`${this.collectionPath}/${id}`);
    }
}
