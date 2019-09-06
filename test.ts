/* eslint-disable no-undefined, no-magic-numbers */
import type from "./index";

test("works", () => {
  expect(type("a")).toEqual("String");
});

test("works", () => {
  expect(type(1)).toEqual("Number");
});

test("works", () => {
  expect(type({})).toEqual("Object");
});

test("works", () => {
  expect(type([])).toEqual("Array");
});

test("works", () => {
  expect(type(true)).toEqual("Boolean");
});

test("works", () => {
  expect(type(false)).toEqual("Boolean");
});

test("works", () => {
  expect(type(null)).toEqual("null");
});

test("works", () => {
  expect(type(undefined)).toEqual("undefined");
});
