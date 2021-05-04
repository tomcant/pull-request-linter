export const lintMustHaveReleaseCategory = (labels: string[], categories: string[]): void => {
  if (labels.filter((l) => categories.includes(l)).length !== 1) {
    throw new Error('Exactly one release category is required');
  }
};
