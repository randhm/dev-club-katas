import { stockList } from './main';

describe('stockList', () => {
    test('returns correct totals for categories A–D', () => {
        const books: string[] = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
        const categories: string[] = ['A', 'B', 'C', 'D'];

        expect(stockList(books, categories)).toBe('(A : 0) - (B : 1290) - (C : 515) - (D : 600)');
    });

    test('returns correct totals for categories A and B only', () => {
        const books: string[] = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
        const categories: string[] = ['A', 'B'];

        expect(stockList(books, categories)).toBe('(A : 200) - (B : 1140)');
    });

    // Optional extra cases (each its own test)
    test('empty books yields zeroes for requested categories', () => {
        const books: string[] = [];
        const categories: string[] = ['A', 'B'];
        expect(stockList(books, categories)).toBe('(A : 0) - (B : 0)');
    });

    test('unknown category letters still appear with zero', () => {
        const books: string[] = ['ABAR 200'];
        const categories: string[] = ['Z'];
        expect(stockList(books, categories)).toBe('(Z : 0)');
    });

    test('ignores malformed entries gracefully (implementation-dependent)', () => {
        const books: string[] = ['ABAR 200', 'BAD', 'CDXE x10'];
        const categories: string[] = ['A', 'C'];
        // Adjust expected based on your spec; here assuming malformed lines are ignored
        expect(stockList(books, categories)).toBe('(A : 200) - (C : 0)');
    });
});
