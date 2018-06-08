import React from 'react'
import octicons from 'octicons'
import classnames from 'classnames'
const SyncIcon = props => (
  <span
    className={classnames('flip-svg', props.className)}
    dangerouslySetInnerHTML={{ __html:
      octicons['sync'].toSVG({ width: 24, height: 24 }) }} />
)

export default SyncIcon
