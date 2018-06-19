import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import React from 'react'
import path from 'path'

const getStaticDocumentMarkup = (props, options) => {
  let document
  let documentPath = path.join(
    options.outDir,
    '../node/_document.js'
  )
  try {
    document = require(documentPath)
  } catch (err) {
    console.log(err)
    document = require('../document')
  }
  const src = path.join(options.publicURL, '_root.js')
  const Document = document.default
  let sheets = options.registry
    ? options.registry.toString()
    : undefined
  if (sheets) {
    props.sheets = sheets
  }
  const staticMarkup = renderToStaticMarkup(
    <Document src={src} {...props} />
  )
  return '<!DOCTYPE html>' + staticMarkup
}

const ssrMiddleware = (Component, options) => {
  const render = async (
    props = {},
    error = null
  ) => {
    const id = options.root || 'root'
    const regex = new RegExp(`(<.*"${id}">)(<\/div>)`)
    const app = renderToString(<Component {...props} />)
    const html = getStaticDocumentMarkup(props, options)
    return html.replace(regex, `$1${app}$2`)
  }

  return async (req, res, next) => {
    let props = {}
    let error = null
    if (
      typeof Component.getInitialProps === 'function'
    ) {
      try {
        props = await Component.getInitialProps(req, res, next, options)
      } catch (err) {
        error = err
      }
    }
    let staticMarkup = await render(props, error)
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(staticMarkup)
  }
}

export default ssrMiddleware
