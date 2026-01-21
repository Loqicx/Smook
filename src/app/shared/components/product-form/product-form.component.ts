import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../core/models/product.model';

@Component({
    selector: 'app-product-form',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './product-form.component.html',
    styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
    @Output() save = new EventEmitter<Omit<Product, 'id'>>();

    private fb = inject(NonNullableFormBuilder);

    form = this.fb.group({
        productName: ['', Validators.required],
        displayName: ['', Validators.required],
        source: ['', Validators.required],
        pricePerPack: [0, [Validators.required, Validators.min(0)]],
        weight: 0,
    });

    submit() {
        if (this.form.valid) {
            const value = this.form.getRawValue();

            const payload: Omit<Product, 'id'> = {
                ...value,
                weight: value.weight > 0 ? value.weight : undefined,
            };
            this.save.emit(payload);
            this.form.reset({
                productName: '',
                displayName: '',
                source: '',
                pricePerPack: 0,
                weight: 0,
            });
        }
    }
}
