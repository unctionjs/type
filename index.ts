/* eslint-disable no-undefined */
export default function type<A extends {constructor: {name: string}}> (value: A): string {
  if (value === null) {
    return "null";
  }

  if (value === undefined) {
    return "undefined";
  }

  return value.constructor.name;
}
