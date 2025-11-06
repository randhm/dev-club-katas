export const travel = (clientAddresses: string, zipcode: string): string => {
    if (zipcode === "") {
        return `${zipcode}:/`;
    }

    const addresses = clientAddresses.split(",");
  
    const filteredAddresses = addresses.filter(address => address.includes(zipcode));

    if (filteredAddresses.length === 0) {
        return `No addresses contain zipcode: ${zipcode}`
    }

    const { streets, houses } = extractStreetsAndHouses(filteredAddresses, zipcode);
    return `${zipcode}:${streets.join(",")}/${houses.join(",")}`;
};
    
const extractStreetsAndHouses = (addresses: string[], zipcode: string) => {
    const streets: string[] = [];
    const houses: string[] = [];

    for (const address of addresses) {
        const doorNumber = address.trim().split(" ")[0];
        const streetTown = address
        .replace(doorNumber + " ", "")
        .replace(" " + zipcode, "")
        .trim();

        streets.push(streetTown);
        houses.push(doorNumber);
    }
    return { streets, houses };
};