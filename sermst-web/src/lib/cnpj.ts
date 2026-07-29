export function onlyCnpjDigits(value: string) {
  return value.replace(/\D/g, '');
}

export function formatCnpj(value: string) {
  const digits = onlyCnpjDigits(value).slice(0, 14);

  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8) {
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  }
  if (digits.length <= 12) {
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
  }

  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
}

export function isValidCnpj(value: string) {
  const digits = onlyCnpjDigits(value);

  if (digits.length !== 14 || /^(\d)\1{13}$/.test(digits)) return false;

  for (let position = 12; position <= 13; position += 1) {
    let sum = 0;
    let weight = position - 7;

    for (let index = 0; index < position; index += 1) {
      sum += Number(digits[index]) * weight;
      weight -= 1;
      if (weight < 2) weight = 9;
    }

    const remainder = sum % 11;
    const verifier = remainder < 2 ? 0 : 11 - remainder;
    if (verifier !== Number(digits[position])) return false;
  }

  return true;
}
