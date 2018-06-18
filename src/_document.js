import React from 'react'
import { Head, Body } from 'parcel-ssr'
import PropTypes from 'prop-types'

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
          <style
            type='text/css'
            dangerouslySetInnerHTML={{ __html: sheets }} id='ssr' />
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
