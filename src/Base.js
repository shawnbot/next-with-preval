import preval from 'babel-plugin-preval/macro'

const base = preval`
  const {renderFile} = require('../lib/render-sass')
  const path = require.resolve('./base.scss')
  module.exports = renderFile(path)
`

export default function Base({children, ...rest}) {
  return (
    <div {...rest}>
      <style scoped>{base}</style>
      {children}
    </div>
  )
}
