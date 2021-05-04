import { lintMustHaveReleaseCategory } from "../../src/lint/labels";

test("it throws when the labels don't contain a release category", () => {
  expect(() => lintMustHaveReleaseCategory([], ["category"]))
    .toThrow("Exactly one release category is required");
});

test("it throws when the labels contain more than one release category", () => {
  expect(() => lintMustHaveReleaseCategory(["cat1", "cat2"], ["cat1", "cat2"]))
    .toThrow("Exactly one release category is required");
});

test("it does not throw when the labels contain exactly one release category", () => {
  expect(() => lintMustHaveReleaseCategory(["category"], ["category"])).not.toThrow();
});
