import preval from 'babel-plugin-preval/macro'

const filename = preval`module.exports = __filename`

export default function Component(props) {
  return <p {...props}>This component lives at <tt>{filename}</tt>.</p>
}
