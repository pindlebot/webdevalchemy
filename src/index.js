import React from 'react'
import 'normalize.css'
import './assets/styles/style.scss'
import { render } from 'react-dom'
import App from './containers/App'
import tiles from './data'

render(
  <App tiles={tiles} />,
  document.getElementById('root')
)
