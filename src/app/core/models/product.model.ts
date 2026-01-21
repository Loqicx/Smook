export interface Product {
    id: string;
    productName: string;
    displayName: string;
    source: string;
    pricePerPack: number;
    weight?: number;
}
