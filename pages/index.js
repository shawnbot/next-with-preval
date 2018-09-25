import React from 'react'
import preval from 'babel-plugin-preval/macro'
import Component from '../src/Component'

const filename = preval`module.exports = __filename`

export default () => (
  <>
    <p>Home page: <tt>{filename}</tt></p>
    <Component />
  </>
)
