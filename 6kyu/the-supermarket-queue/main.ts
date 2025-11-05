export const queueTime = (customers: number[], tills: number): number => {
    if (tills <= 0) {
        throw new Error('Number of tills must be positive');
    }
    
    if (customers.length === 0) {
        return 0;
    }

    if (tills === 1) {
        return customers.reduce((acc, curr) => acc + curr, 0);
    }
    
    if (tills >= customers.length) {
        return Math.max(...customers);
    }
    
    const tillTimes = new Array<number>(tills).fill(0);
    
    for (const customer of customers) {
        const minTillIndex = tillTimes.indexOf(Math.min(...tillTimes));
        tillTimes[minTillIndex] += customer;
    }

    return Math.max(...tillTimes);
};