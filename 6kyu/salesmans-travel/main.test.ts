import { travel } from "./main";

const addresses =
  "123 Main Street St. Louisville OH 43071," +
  "432 Main Long Road St. Louisville OH 43071," +
  "786 High Street Pollocksville NY 56432," +
  "54 Holy Grail Street Niagara Town ZP 32908," +
  "3200 Main Rd. Bern AE 56210," +
  "1 Gordon St. Atlanta RE 13000," +
  "10 Pussy Cat Rd. Chicago EX 34342," +
  "10 Gordon St. Atlanta RE 13000," +
  "58 Gordon Road Atlanta RE 13000," +
  "22 Tokyo Av. Tedmondville SW 43098," +
  "674 Paris bd. Abbeville AA 45521," +
  "10 Surta Alley Goodtown GG 30654," +
  "45 Holy Grail Al. Niagara Town ZP 32908," +
  "320 Main Al. Bern AE 56210," +
  "14 Gordon Park Atlanta RE 13000," +
  "100 Pussy Cat Rd. Chicago EX 34342," +
  "2 Gordon St. Atlanta RE 13000," +
  "5 Gordon Road Atlanta RE 13000," +
  "2200 Tokyo Av. Tedmondville SW 43098," +
  "67 Paris St. Abbeville AA 45521," +
  "11 Surta Avenue Goodtown GG 30654," +
  "45 Holy Grail Al. Niagara Town ZP 32918," +
  "320 Main Al. Bern AE 56215," +
  "14 Gordon Park Atlanta RE 13200," +
  "100 Pussy Cat Rd. Chicago EX 34345," +
  "2 Gordon St. Atlanta RE 13222," +
  "5 Gordon Road Atlanta RE 13001," +
  "2200 Tokyo Av. Tedmondville SW 43198," +
  "67 Paris St. Abbeville AA 45522," +
  "11 Surta Avenue Goodville GG 30655," +
  "2222 Tokyo Av. Tedmondville SW 43198," +
  "670 Paris St. Abbeville AA 45522," +
  "114 Surta Avenue Goodville GG 30655," +
  "2 Holy Grail Street Niagara Town ZP 32908," +
  "3 Main Rd. Bern AE 56210," +
  "77 Gordon St. Atlanta RE 13000," +
  "999 Edge Case Ave. Nowhere ZZ 00000," +
  "   1000  Spaced Out Blvd.   Oddtown   ZZ   00001   ,";

describe("travel", () => {
  it("Basic tests", () => {
    expect(travel(addresses, "AA 45522")).toBe("AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670");
    expect(travel(addresses, "EX 34342")).toBe("EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100");
    expect(travel(addresses, "EX 34345")).toBe("EX 34345:Pussy Cat Rd. Chicago/100");
    expect(travel(addresses, "AA 45521")).toBe("AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67");
    expect(travel(addresses, "AE 56215")).toBe("AE 56215:Main Al. Bern/320");
    expect(travel(addresses, "")).toBe(":/");
  });

  it("Returns / for non-existent zipcode", () => {
    expect(travel(addresses, "NO 99999")).toBe("No addresses contain zipcode: NO 99999");
  });

//   it("Handles addresses with extra spaces gracefully", () => {
//     expect(travel(addresses, "ZZ 00001")).toBe("ZZ 00001:Spaced Out Blvd. Oddtown/1000");
//   });

//   it("Handles zipcode at start, middle, or end safely (no false positives)", () => {
//     // Check that partial matches (like "RE 1300") don't match "RE 13000"
//     expect(travel(addresses, "RE 1300")).toBe("No addresses contain zipcode: RE 1300");
//     // Check that a similar substring doesn't trigger a match (e.g., "RE 1300X")
//     expect(travel(addresses, "RE 1300X")).toBe("No addresses contain zipcode RE 1300X");
//   });

  it("Handles single matching address", () => {
    expect(travel(addresses, "ZZ 00000")).toBe("ZZ 00000:Edge Case Ave. Nowhere/999");
  });

  it("Handles multiple addresses with same street but different zipcodes correctly", () => {
    expect(travel(addresses, "ZP 32908")).toBe(
      "ZP 32908:Holy Grail Street Niagara Town,Holy Grail Al. Niagara Town,Holy Grail Street Niagara Town/54,45,2"
    );
  });

  it("Handles large dataset quickly and consistently", () => {
    const bigInput = Array(1000).fill(addresses).join(",");
    const result = travel(bigInput, "AA 45522");
    expect(result.startsWith("AA 45522:")).toBe(true);
    expect(result.includes("/")).toBe(true);
  });

  it("Is case sensitive (zipcode must match exactly)", () => {
    expect(travel(addresses, "aa 45522")).toBe("No addresses contain zipcode: aa 45522");
  });

  it("Handles trailing commas or whitespace in addresses input", () => {
    const messyInput = addresses + "   ";
    expect(travel(messyInput, "AA 45522")).toBe("AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670");
  });
});