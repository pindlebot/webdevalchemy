import React from 'react'
import octicons from 'octicons'

const githubMarkSvg = octicons['mark-github'].toSVG({ fill: '#fff' })

export default props =>
  <span dangerouslySetInnerHTML={{ __html: githubMarkSvg }} className='mark' />
