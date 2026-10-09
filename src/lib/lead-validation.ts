import { BLOCKED_TERMS } from "@/lib/static/blocked-terms";
import { DISPOSABLE_EMAIL_DOMAINS } from "@/lib/static/disposable-email-domains";

export function isBlockedPhrase(value: string): boolean {
  const normalized = value.trim().toLowerCase().replace(/[\s._-]+/g, "");
  if (!normalized) return true;

  return BLOCKED_TERMS.some((term) => {
    if (normalized === term) return true;
    if (new RegExp(`^${term}\\d*$`).test(normalized)) return true;
    if (normalized.length <= 20 && normalized.includes(term)) return true;
    return false;
  });
}

export const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё\s'-]{2,60}$/;

export const EMAIL_REGEX = /^[^\s@<>"'`]+@[^\s@<>"'`]+\.[^\s@<>"'`]{2,}$/;

export function validateLeadInput({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}): string | null {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  const digits = phone.replace(/\D/g, "");

  // защита от XSS и HTML инъекций
  if (/[<>"'`]/.test(trimmedName) || /[<>"'`]/.test(trimmedEmail)) {
    return "Invalid characters in input.";
  }

  if (!NAME_REGEX.test(trimmedName)) {
    return "Please enter a valid name.";
  }
  if (isBlockedPhrase(trimmedName)) {
    return "Please enter your real name.";
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return "Please enter a valid email.";
  }
  const [localPart, domain] = trimmedEmail.split("@");
  if (isBlockedPhrase(localPart)) {
    return "Please use your real email address.";
  }
  if (domain && DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return "Please use a real, non-disposable email address.";
  }

  if (digits.length < 9 || digits.length > 13) {
    return "Please enter a valid phone number.";
  }

  return null;
}