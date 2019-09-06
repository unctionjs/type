/* eslint-disable no-undefined, no-magic-numbers */
import type from "./index";

test(() => {
  expect(type("a")).toEqual("String");
});

test(() => {
  expect(type(1)).toEqual("Number");
});

test(() => {
  expect(type({})).toEqual("Object");
});

test(() => {
  expect(type([])).toEqual("Array");
});

test(() => {
  expect(type(true)).toEqual("Boolean");
});

test(() => {
  expect(type(false)).toEqual("Boolean");
});

test(() => {
  expect(type(null)).toEqual("null");
});

test(() => {
  expect(type(undefined)).toEqual("undefined");
});
