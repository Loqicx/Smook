export interface RecipeIngredient {
    productId: string;
    amount: number;
}

export interface Recipe {
    id: string;
    name: string;
    ingredients: RecipeIngredient[];
}
