import { queueTime } from "./main";

describe("queueTime", () => {
  it("should handle basic queue scenarios correctly", () => {
    expect(queueTime([], 1)).toBe(0);
    expect(queueTime([1,2,3,4], 1)).toBe(10);
    expect(queueTime([2,2,3,3,4,4], 2)).toBe(9);
    expect(queueTime([1,2,3,4,5], 100)).toBe(5);
    expect(queueTime([5,3,4], 1)).toBe(12);
    expect(queueTime([10,2,3,3], 2)).toBe(10);
    expect(queueTime([2,3,10,2], 2)).toBe(12);
  });

  it("should validate input parameters", () => {
    // Test negative tills
    expect(() => queueTime([1, 2, 3], -1)).toThrow('Number of tills must be positive');
    expect(() => queueTime([1, 2, 3], 0)).toThrow('Number of tills must be positive');
    expect(() => queueTime([], -5)).toThrow('Number of tills must be positive');
  });

  it("should handle cases with more tills than customers efficiently", () => {
    // More tills than customers - each customer gets their own till
    expect(queueTime([5], 3)).toBe(5);
    expect(queueTime([1, 2], 5)).toBe(2);
    expect(queueTime([3, 7, 1], 10)).toBe(7);
    expect(queueTime([10, 5, 15, 2], 8)).toBe(15);
    
    // Equal tills and customers
    expect(queueTime([4, 6, 8], 3)).toBe(8);
    expect(queueTime([1, 1, 1, 1], 4)).toBe(1);
    
    // Single customer with many tills
    expect(queueTime([42], 100)).toBe(42);
  });
  
  it("should handle edge cases with varying till-to-customer ratios", () => {
    // Single customer
    expect(queueTime([7], 1)).toBe(7);
    expect(queueTime([7], 3)).toBe(7);
    
    // More tills than customers
    expect(queueTime([1, 2, 3], 10)).toBe(3);
    expect(queueTime([5], 100)).toBe(5);
    
    // Equal number of tills and customers
    expect(queueTime([4, 6, 8], 3)).toBe(8);
    expect(queueTime([1, 1, 1, 1], 4)).toBe(1);
  });

  it("should handle extreme values and zero service times", () => {
    // Very long queue times
    expect(queueTime([100, 200, 300], 1)).toBe(600);
    expect(queueTime([50, 50, 50, 50], 2)).toBe(100);
    
    // Zero service times (instant checkout)
    expect(queueTime([0, 0, 0], 1)).toBe(0);
    expect(queueTime([0, 5, 0, 3], 2)).toBe(5);
  });

  it("should distribute customers optimally across multiple tills", () => {
    // Should distribute evenly
    expect(queueTime([2, 2, 2, 2], 2)).toBe(4);
    expect(queueTime([1, 1, 1, 1, 1, 1], 3)).toBe(2);
    
    // Uneven distribution
    expect(queueTime([10, 1, 1, 1, 1], 2)).toBe(10);
    expect(queueTime([1, 10, 1, 1, 1], 2)).toBe(10);
    
    // One very long customer
    expect(queueTime([1, 1, 1, 100], 3)).toBe(101);
  });

  it("should handle realistic supermarket checkout scenarios", () => {
    // Typical checkout times (in minutes)
    expect(queueTime([3, 5, 2, 7, 4, 6], 2)).toBe(15);
    expect(queueTime([2, 4, 1, 3, 8, 2, 5], 3)).toBe(10);
    
    // Rush hour scenario
    expect(queueTime([5, 3, 8, 2, 6, 4, 7, 1, 9], 3)).toBe(19);
  });
});