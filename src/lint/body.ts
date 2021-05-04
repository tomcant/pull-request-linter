export const lintBodyLength = (body: string, minLength: number): void => {
  if (body.length < minLength) {
    throw new Error(`Body must be at least ${minLength} characters long`);
  }
};

export const lintBodyMustNotContain = (body: string, substring: string): void => {
  if (body.includes(substring)) {
    throw new Error(`Body must not contain substring "${substring}"`);
  }
};
