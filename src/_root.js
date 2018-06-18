import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const props = (window.__DATA__ && window.__DATA__.props) || {}

ReactDOM.render(<App {...props} />, document.getElementById('root'), () => {
  const ssStyles = document.getElementById('ssr')
  if (ssStyles) {
    ssStyles.parentNode.removeChild(ssStyles)
  }
})
