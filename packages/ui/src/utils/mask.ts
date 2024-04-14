export function mask(text: string, pattern: string) {
  let result = ''
  let i = 0

  for (const char of pattern.split('')) {
    if (!text[i]) break

    if (!/[0-9a-zA-Z]/i.test(char)) {
      result += char
      continue
    }

    result += text[i++]
  }

  return { raw: text, value: result }
}
