import { describe, it, expect } from "vitest";
import { fullCountryName } from "./country-name";

describe("fullCountryName", () => {
  it("converts ISO codes to full names", () => {
    expect(fullCountryName("FI")).toBe("Finland");
    expect(fullCountryName("US")).toBe("United States");
  });

  it("returns dash for missing input", () => {
    expect(fullCountryName(null)).toBe("—");
    expect(fullCountryName(undefined)).toBe("—");
  });

  it("handles lowercase codes", () => {
    expect(fullCountryName("fi")).toBe("Finland");
  });
});