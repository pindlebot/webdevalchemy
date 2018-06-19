import React from 'react'
import PropTypes from 'prop-types'

const Script = ({ src }) =>
  (<script src={src} type='text/javascript' />)

const Body = props => (
  <body>
    <div id='root' />
    <Script src={props.src} />
    {props.children}
  </body>
)

const Head = props => (
  <head id={props.id}>
    <title>{props.title}</title>
    <script
      type='text/javascript'
      dangerouslySetInnerHTML={{ __html: props.data }}
    />
    {props.children}
  </head>
)

Head.defaultProps = {
  title: 'untitled',
  id: 'parcel',
  data: {}
}

class Document extends React.Component {
  render () {
    const {
      src,
      sheets,
      ...props
    } = this.props
    let meta = {
      excerpt: '',
      image: '',
      canonical: 'https://webdevalchemy.com/',
      site: 'WebDevAcademy',
      title: 'WebDevAcademy',
      handle: '@webdevalchemy',
      page: 1,
      ...(props.meta || {})
    }
    const data = 'window.__DATA__ = ' + JSON.stringify({ props: {} })
    return (
      <html lang='en'>
        <Head data={data} {...meta}>
          {sheets && <style
            type='text/css'
            dangerouslySetInnerHTML={{ __html: sheets }} id='ssr' />}
          <link
            rel='stylesheet'
            href='/assets/_root.css' />
        </Head>
        <Body src={src} />
      </html>
    )
  }
}

Document.defaultProps = {
  title: 'Untitled'
}

Document.propTypes = {
  title: PropTypes.string,
  canonical: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string
}

export default Document
