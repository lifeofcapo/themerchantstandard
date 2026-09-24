import { describe, it, expect, beforeEach } from "vitest";
import { createAdminSessionToken, verifyAdminSessionToken } from "./admin-auth";

describe("admin session tokens", () => {
  beforeEach(() => {
    process.env.ADMIN_SESSION_SECRET = "test-secret-for-vitest-only";
  });

  it("verifies a token it created itself", async () => {
    const token = await createAdminSessionToken();
    const valid = await verifyAdminSessionToken(token);
    expect(valid).toBe(true);
  });

  it("rejects a tampered token", async () => {
    const token = await createAdminSessionToken();
    const tampered = token.slice(0, -4) + "0000";
    const valid = await verifyAdminSessionToken(tampered);
    expect(valid).toBe(false);
  });

  it("rejects missing token", async () => {
    const valid = await verifyAdminSessionToken(undefined);
    expect(valid).toBe(false);
  });

  it("rejects access when secret is not configured", async () => {
    const token = await createAdminSessionToken();
    delete process.env.ADMIN_SESSION_SECRET;
    const valid = await verifyAdminSessionToken(token);
    expect(valid).toBe(false); // fail closed, not fail open
  });
});