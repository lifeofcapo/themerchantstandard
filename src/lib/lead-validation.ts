const BLOCKED_TERMS = [
  "test", "tester", "testing", "user", "username", "admin", "administrator",
  "fake", "dummy", "sample", "example", "demo", "asdf", "qwerty", "foo",
  "bar", "foobar", "xxx", "aaa", "noname", "anonymous", "nobody",
  "johndoe", "janedoe", "firstname", "lastname",
];


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

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com", "yopmail.com", "tempmail.com", "trashmail.com",
  "guerrillamail.com", "10minutemail.com", "fakeinbox.com", "test.com",
  "example.com", "discard.email",
]);

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