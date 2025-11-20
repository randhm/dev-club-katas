import { cakes } from "./main";

describe('cakes', () => {
  describe('basic functionality', () => {
    it('should return correct number when multiple cakes can be made', () => {
      const recipe = { flour: 500, sugar: 200, eggs: 1 };
      const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
      expect(cakes(recipe, available)).toBe(2);
    });

    it('should be limited by the ingredient with least availability', () => {
      const recipe = { flour: 500, sugar: 200, eggs: 1 };
      const available = { flour: 5000, sugar: 5000, eggs: 3 };
      expect(cakes(recipe, available)).toBe(3); // limited by eggs
    });

    it('should handle exact ingredient amounts for one cake', () => {
      const recipe = { flour: 500, sugar: 200 };
      const available = { flour: 500, sugar: 200 };
      expect(cakes(recipe, available)).toBe(1);
    });
  });

  describe('missing ingredients', () => {
    it('should return 0 when a required ingredient is missing', () => {
      const recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
      const available = { sugar: 500, flour: 2000, milk: 2000 };
      expect(cakes(recipe, available)).toBe(0);
    });

    it('should return 0 when multiple required ingredients are missing', () => {
      const recipe = { flour: 500, sugar: 200, eggs: 1, milk: 100 };
      const available = { flour: 1000, sugar: 500 };
      expect(cakes(recipe, available)).toBe(0);
    });

    it('should return 0 when all ingredients are missing', () => {
      const recipe = { flour: 500, sugar: 200 };
      const available = {};
      expect(cakes(recipe, available)).toBe(0);
    });
  });

  describe('insufficient ingredients', () => {
    it('should return 0 when ingredients exist but are insufficient for one cake', () => {
      const recipe = { flour: 500, sugar: 200 };
      const available = { flour: 400, sugar: 1000 };
      expect(cakes(recipe, available)).toBe(0);
    });

    it('should return 0 when one ingredient has zero quantity', () => {
      const recipe = { flour: 500, sugar: 200 };
      const available = { flour: 1000, sugar: 0 };
      expect(cakes(recipe, available)).toBe(0);
    });
  });

  describe('edge cases', () => {
    it('should handle recipe with single ingredient', () => {
      const recipe = { flour: 100 };
      const available = { flour: 500 };
      expect(cakes(recipe, available)).toBe(5);
    });

    it('should ignore extra available ingredients not in recipe', () => {
      const recipe = { flour: 500 };
      const available = { flour: 1500, sugar: 1000, eggs: 10, milk: 500 };
      expect(cakes(recipe, available)).toBe(3);
    });

    it('should handle large quantities', () => {
      const recipe = { flour: 100, sugar: 50 };
      const available = { flour: 100000, sugar: 50000 };
      expect(cakes(recipe, available)).toBe(1000);
    });

    it('should handle fractional results correctly (floor)', () => {
      const recipe = { flour: 300 };
      const available = { flour: 1000 };
      expect(cakes(recipe, available)).toBe(3); // 1000/300 = 3.33, floored to 3
    });

    it('should handle recipe with many ingredients', () => {
      const recipe = { 
        flour: 500, 
        sugar: 200, 
        eggs: 1, 
        milk: 100, 
        butter: 50, 
        vanilla: 1 
      };
      const available = { 
        flour: 1000, 
        sugar: 400, 
        eggs: 2, 
        milk: 200, 
        butter: 100, 
        vanilla: 2 
      };
      expect(cakes(recipe, available)).toBe(2);
    });
  });

  describe('boundary cases', () => {
    it('should return 0 when recipe requires 0 of an ingredient that is missing', () => {
      const recipe = { flour: 500, sugar: 0 };
      const available = { flour: 1000 };
      expect(cakes(recipe, available)).toBe(0); // sugar is required but missing
    });

    it('should handle very small ingredient requirements', () => {
      const recipe = { flour: 1, sugar: 1 };
      const available = { flour: 10, sugar: 10 };
      expect(cakes(recipe, available)).toBe(10);
    });
  });
});