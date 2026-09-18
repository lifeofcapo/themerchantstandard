const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

export function fullCountryName(code: unknown): string {
  if (typeof code !== "string" || !code) return "—";
  try {
    return regionNames.of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}