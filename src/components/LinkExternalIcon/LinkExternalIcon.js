import React from 'react'
import octicons from 'octicons'

const linkExternalSvg = octicons['link-external'].toSVG({ fill: '#fff' })

export default props =>
  <span dangerouslySetInnerHTML={{ __html: linkExternalSvg }} className='mark' />
