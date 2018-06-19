import path from 'path'
import App from './app'
import { SheetsRegistry, JssProvider } from 'react-jss'
import React from 'react'
import { AlchemyThemeProvider, createGenerateClassName } from 'alchemy-ui'
import http from 'http'
// import middleware from './middleware'
import middleware from 'parcel-ssr/lib/middleware/middleware'

const port = process.env.PORT || 3000

let server
let warm = false

const options = {
  publicURL: '/assets/',
  outDir: path.join(__dirname, '../browser'),
  registry: new SheetsRegistry()
}
const generateClassName = createGenerateClassName()

const Wrapper = props => {
  if (warm) {
    options.registry = new SheetsRegistry()
  } else {
    warm = true
  }
  return (
    <JssProvider
      registry={options.registry}
      generateClassName={generateClassName}
    >
      <AlchemyThemeProvider theme={{}} sheetsManager={new Map()}>
        <App {...props} />
      </AlchemyThemeProvider>
    </JssProvider>
  )
}

const createServer = () => {
  let handler = middleware(options)(Wrapper)
  server = http.createServer(handler)
  server.listen(port)

  return new Promise((resolve, reject) => {
    server.on('error', err => {
      console.error(err)
      reject(err)
    })

    server.once('listening', () => {
      console.log(
        `Server running at http://localhost:${server.address().port}`
      )

      resolve(server)
    })
  })
}

createServer()
