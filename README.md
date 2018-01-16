# @unction/type

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> null | void | {constructor: {name: string}} => string

Returns the type name of the value provided.

``` javascript
type("a") // "String"
type(1) // "Number"
type({}) // "Object"
type([]) // "Array"
type(true) // "Boolean"
type(null) // "null"
type(undefined) // "undefined"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/type.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/type.svg?maxAge=2592000&style=flat-square
