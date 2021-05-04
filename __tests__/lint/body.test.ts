import { lintBodyLength, lintBodyMustNotContain } from "../../src/lint/body";

test("it throws when the body is too short", () => {
  expect(() => lintBodyLength("", 1))
    .toThrow("Body must be at least 1 characters long");
});

test("it does not throw when the body is long enough", () => {
  expect(() => lintBodyLength("Foo", 3)).not.toThrow();
});

test("it throws when the body contains an illegal substring", () => {
  expect(() => lintBodyMustNotContain("Foo bar baz", "bar"))
    .toThrow('Body must not contain substring "bar"');
});

test("it does not throw when the body contains no illegal substring", () => {
  expect(() => lintBodyMustNotContain("Foo bar", "Baz")).not.toThrow();
});
