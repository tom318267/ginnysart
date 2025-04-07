import { calculateShipping } from "../../utils/calculateShipping";

describe("calculateShipping", () => {
  test("returns free shipping for US orders over $500", () => {
    expect(calculateShipping(600, "US")).toBe(0);
  });

  test("returns base rate for US orders under threshold", () => {
    expect(calculateShipping(100, "US")).toBe(15.0);
  });

  test("adds additional charge for orders over threshold", () => {
    expect(calculateShipping(300, "US")).toBe(20.0); // base + additional charge
  });

  test("handles international shipping correctly", () => {
    expect(calculateShipping(100, "INTERNATIONAL")).toBe(35.0);
    expect(calculateShipping(800, "INTERNATIONAL")).toBe(0);
  });
});
