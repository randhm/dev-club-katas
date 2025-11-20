type Ingredients = Record<string, number>;

export const cakes = (recipe: Ingredients, available: Ingredients) : number => {
    let possibleCakes: number[] = [];
    for (const ingredient in recipe) {
        if (!available[ingredient]) {
            return 0;
        }
        const possibleCakesPerIngredient = Math.floor(available[ingredient] / recipe[ingredient]);
        possibleCakes.push(possibleCakesPerIngredient);
    }
    return Math.min(...possibleCakes)
}