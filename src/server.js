import path from 'path'
import serve from 'parcel-ssr/lib/server/create-server'
import App from './app'
import { JssProvider, SheetsRegistry } from 'react-jss'
import React from 'react'
import { createGenerateClassName } from 'alchemy-ui'

const Wrapper = props => {
  const sheets = new SheetsRegistry()
  
  const generateClassName = createGenerateClassName()
  Wrapper.getInitialProps = function () {
    return new Promise((resolve, reject) => {
      process.nextTick(() => resolve({ sheets }))
    })
  }
  return (
    <JssProvider registry={sheets} generateClassName={generateClassName}>
      <App {...props} />
    </JssProvider>
  )
}

const publicURL = '/assets/'
const outDir = path.join(__dirname, '../browser')
const port = process.env.PORT || 3000

serve({ publicURL, outDir }, port, Wrapper)
