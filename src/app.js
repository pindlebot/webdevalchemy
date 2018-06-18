import React from 'react'
import App from './containers/App'
import tiles from '/data'
import font from './assets/fonts/apercu_regular_pro.woff'
import { withStyles } from 'alchemy-ui'
import './assets/styles/fa/font-awesome.scss'

const sheet = {
  '@global': {
    '@font-face': {
      fontFamily: 'Ap',
      src: `url('${font}') format('woff')`
    },
    html: {
      minHeight: '100%'
    },
    body: {
      margin: 0,
      fontFamily: '\'Ap\', sans-serif',
      backgroundColor: '#f2f2f2',
      color: '#34495e',
      minHeight: '100%'
    }
  }
}

export default withStyles(sheet)((props) => <App {...props} tiles={tiles} />)
