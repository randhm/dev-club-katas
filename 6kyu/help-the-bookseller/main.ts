export const stockList = (books: string[], categories: string[]): string => {
    const categoryCounts: Record<string, number> = {};

    const formatResults = (categoryCounts: Record<string, number>): string => {
        const results = categories.map(category => {
            const count = categoryCounts[category] || 0;
            return `(${category} : ${count})`; 
        });
        return results.join(' - ');
    }
    
    if (books.length === 0 || categories.length === 0) {
        return formatResults(categoryCounts);
    };

    for (const book of books) {
        const category = book[0];
        const quantity = parseInt(book.split(' ')[1]);

        categoryCounts[category] = (categoryCounts[category] || 0) + quantity;
    }

    return formatResults(categoryCounts);
};

