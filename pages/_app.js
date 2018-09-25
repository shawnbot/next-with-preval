import React from 'react'
import App, {Container} from 'next/app'
import preval from 'babel-plugin-preval/macro'

const timestamp = preval`module.exports = Date.now()`

export default class MyApp extends App {
  render() {
    const {Component} = this.props
    return (
      <Container>
        <Component />
        <p>Built on {new Date(timestamp).toString()}.</p>
      </Container>
    )
  }
}
