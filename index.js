/* eslint-disable no-undefined */

export default function type (value: null | void | {constructor: {name: string}}): string {
  if (value === null) {
    return "null"
  }

  if (value === undefined) {
    return "undefined"
  }

  return value.constructor.name
}
