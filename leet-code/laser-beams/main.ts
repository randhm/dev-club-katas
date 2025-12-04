type Bank = string[];

export const numberOfBeams = (bank: Bank) : number => {
    let totalBeams = 0;
    let previousRowDeviceCount = 0;

    for (const row of bank) {
        const currentRowDeviceCount = row.split('').filter(cell => cell === '1').length;

        if (currentRowDeviceCount > 0) {
            totalBeams += previousRowDeviceCount * currentRowDeviceCount;
            previousRowDeviceCount = currentRowDeviceCount;
        }
    }
    return totalBeams;
}