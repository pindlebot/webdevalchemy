import path from 'path'
import App from './app'
import { SheetsRegistry, JssProvider } from 'react-jss'
import React from 'react'
import { ThemeProvider, createGenerateClassName } from 'alchemy-ui'
import http from 'http'
import { serverErrors } from 'parcel-bundler/src/utils/customErrors'
import logger from 'parcel-bundler/src/Logger'
import middleware from 'parcel-ssr/lib/middleware/middleware'

const port = process.env.PORT || 3000

let server
let counter = 0

const createServer = async () => {
  const options = {
    publicURL: '/assets/',
    outDir: path.join(__dirname, '../browser'),
    registry: new SheetsRegistry()
  }
  const Wrapper = props => {
    counter++
    if (counter > 1) {
      options.registry = new SheetsRegistry()
    }
    const generateClassName = createGenerateClassName()

    return (
      <JssProvider
        registry={options.registry}
        generateClassName={generateClassName}
      >
        <ThemeProvider theme={{}} sheetsManager={new Map()}>
          <App {...props} />
        </ThemeProvider>
      </JssProvider>
    )
  }

  let handler = middleware(options)(Wrapper)
  server = http.createServer(handler)
  server.listen(port)

  return new Promise((resolve, reject) => {
    server.on('error', err => {
      logger.error(new Error(serverErrors(err, server.address().port)))
      reject(err)
    })

    server.once('listening', () => {
      let addon = server.address().port !== port
        ? `- ${logger.chalk.yellow(`configured port ${port} could not be used.`)}`
        : ''

      logger.persistent(
        `Server running at ${logger.chalk.cyan(
          `http://localhost:${server.address().port}`
        )} ${addon}`
      )

      resolve(server)
    })
  })
}

createServer()
