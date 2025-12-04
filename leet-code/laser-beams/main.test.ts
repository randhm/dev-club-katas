import { numberOfBeams } from "./main";

describe('numberOfBeams', () => {
  it('should return correct beams for multiple non-empty rows', () => {
    const bank = [
      "011001",
      "000000",
      "010100",
      "001000"
    ];
    // Devices per row: [3,0,2,1] => beams: 3*2 + 2*1 = 6 + 2 = 8
    expect(numberOfBeams(bank)).toBe(8);
  });

  it('should return 0 when all rows are empty', () => {
    const bank = [
      "0000",
      "0000",
      "0000"
    ];
    expect(numberOfBeams(bank)).toBe(0);
  });

  it('should return 0 when only one non-empty row exists', () => {
    const bank = [
      "0000",
      "0101",
      "0000"
    ];
    expect(numberOfBeams(bank)).toBe(0);
  });

  it('should handle alternating empty and non-empty rows', () => {
    const bank = [
      "010",
      "000",
      "101",
      "000",
      "110"
    ];
    // Devices: [1,0,2,0,2] => beams: 1*2 + 2*2 = 2 + 4 = 6
    expect(numberOfBeams(bank)).toBe(6);
  });

  it('should return 0 for a bank with only one row', () => {
    const bank = ["10101"];
    expect(numberOfBeams(bank)).toBe(0);
  });

  it('should handle all rows full of devices', () => {
    const bank = [
      "111",
      "111",
      "111"
    ];
    // Devices: [3,3,3] => beams: 3*3 + 3*3 = 9 + 9 = 18
    expect(numberOfBeams(bank)).toBe(18);
  });

  it('should handle varying numbers of devices per row', () => {
    const bank = [
      "100",
      "110",
      "001",
      "101"
    ];
    // Devices: [1,2,1,2] => beams: 1*2 + 2*1 + 1*2 = 2 + 2 + 2 = 6
    expect(numberOfBeams(bank)).toBe(6);
  });

  it('should return 0 for empty bank', () => {
    const bank: string[] = [];
    expect(numberOfBeams(bank)).toBe(0);
  });

  it('should return 0 for bank with only rows of zeros', () => {
    const bank = [
      "000",
      "000"
    ];
    expect(numberOfBeams(bank)).toBe(0);
  });

  it('should handle bank with mixed rows', () => {
    const bank = [
      "001",
      "000",
      "010",
      "000",
      "100"
    ];
    // Devices: [1,0,1,0,1] => beams: 1*1 + 1*1 = 1 + 1 = 2
    expect(numberOfBeams(bank)).toBe(2);
  });

  it('should handle large input', () => {
    const bank = Array(1000).fill("1");
    // Each row has 1 device, so beams: 0 (since prevCount always 1, but only one device per row)
    // Actually, for n rows with 1 device each: beams = (n-1)*1*1 = n-1
    expect(numberOfBeams(bank)).toBe(999);
  });
});