import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import preval from 'babel-plugin-preval/macro'

const filename = preval`module.exports = __filename`

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Next.js with preval</title>
        </Head>
        <body>
          <Main />
          <p>Document: <tt>{filename}</tt></p>
          <NextScript />
        </body>
      </html>
    )
  }
}
