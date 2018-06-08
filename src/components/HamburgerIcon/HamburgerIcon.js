import React from 'react'
import octicons from 'octicons'

const threeBarsSvg = octicons['three-bars'].toSVG({ fill: '#fff', width: 18 })

export default props =>
  <span dangerouslySetInnerHTML={{ __html: threeBarsSvg }} className='mark' />
