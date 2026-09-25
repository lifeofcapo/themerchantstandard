import { describe, it, expect } from "vitest";
import { validateLeadInput, isBlockedPhrase, EMAIL_REGEX } from "./lead-validation";

describe("isBlockedPhrase", () => {
  it("blocks exact test values", () => {
    expect(isBlockedPhrase("test")).toBe(true);
    expect(isBlockedPhrase("user")).toBe(true);
    expect(isBlockedPhrase("admin")).toBe(true);
  });

  it("blocks test values with trailing digits", () => {
    expect(isBlockedPhrase("test123")).toBe(true);
    expect(isBlockedPhrase("user99")).toBe(true);
  });

  it("allows legitimate names", () => {
    expect(isBlockedPhrase("michael")).toBe(false);
    expect(isBlockedPhrase("sarah.j")).toBe(false);
  });

  it("blocks empty input", () => {
    expect(isBlockedPhrase("")).toBe(true);
    expect(isBlockedPhrase("   ")).toBe(true);
  });
});

describe("EMAIL_REGEX", () => {
  it("accepts valid emails", () => {
    expect(EMAIL_REGEX.test("name@example.com")).toBe(true);
  });

  it("rejects emails with angle brackets or quotes", () => {
    expect(EMAIL_REGEX.test('name<script>@example.com')).toBe(false);
  });

  it("rejects malformed emails", () => {
    expect(EMAIL_REGEX.test("not-an-email")).toBe(false);
    expect(EMAIL_REGEX.test("missing@domain")).toBe(false);
  });
});

describe("validateLeadInput", () => {
  it("rejects blocked test names", () => {
    const error = validateLeadInput({ name: "test", email: "real@example.com", phone: "12345678" });
    expect(error).toBeTruthy();
  });

  it("rejects XSS attempts in name", () => {
    const error = validateLeadInput({
      name: "<script>alert(1)</script>",
      email: "real@example.com",
      phone: "12345678",
    });
    expect(error).toBeTruthy();
  });

  it("rejects phone numbers that are too short", () => {
    const error = validateLeadInput({ name: "Michael", email: "real@example.com", phone: "123" });
    expect(error).toBeTruthy();
  });

  it("rejects phone numbers that are too long", () => {
    const error = validateLeadInput({ name: "Michael", email: "real@example.com", phone: "12345678901234" });
    expect(error).toBeTruthy();
  });

  it("rejects invalid email", () => {
    const error = validateLeadInput({ name: "Michael Johnson", email: "real@example.com", phone: "12345678" });
    expect(error).toBeTruthy();
  });
});