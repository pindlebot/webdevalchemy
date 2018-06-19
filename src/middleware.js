import path from 'path'
import serveStatic from 'serve-static'
import url from 'url'
import ssrMiddleware from './ssr'

const middleware = (opts = {}) => Component => {
  const options = {
    publicURL: '/',
    outDir: path.resolve('dist/browser'),
    ...opts
  }

  const serve = serveStatic(options.outDir, {
    index: false
  })
  const serveIndex = ssrMiddleware(Component, options)

  return function (req, res, next) {
    function send404 () {
      if (next) {
        return next()
      }

      res.writeHead(404)
      res.end()
    }
    let { pathname } = url.parse(req.url)
    if (
      !pathname.startsWith(options.publicURL) ||
      path.extname(pathname) === ''
    ) {
      return serveIndex(req, res, next)
    }
    req.url = pathname.slice(options.publicURL.length)
    return serve(req, res, send404)
  }
}

export default middleware
