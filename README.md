# next-with-preval

This is a demo of using [Next.js] with the [babel-plugin-macros] and [preval.macro] to inline CSS generated from SCSS source files _at build time_. It works in this test case, but not in another app I'm working on, and _only_ fails in production.

## Why?

Because we don't use Webpack to build our distributed JS bundles, so we can't use [sass-loader].

[Next.js]: https://github.com/zeit/next.js
[babel-plugin-macros]: https://github.com/kentcdodds/babel-plugin-macros
[preval.macro]: https://github.com/kentcdodds/preval.macro
[sass-loader]: https://github.com/webpack-contrib/sass-loader
