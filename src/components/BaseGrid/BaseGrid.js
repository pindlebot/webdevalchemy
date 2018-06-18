import React from 'react'
import { withStyles, withWidth } from 'alchemy-ui'
// import withWidth from '.././../util/withWidth'
import classnames from 'classnames'

const styles = {
  grid: {
    display: 'grid',
    gridGap: '10px',
    gridAutoRows: 'calc(33vh - 10px)'
  },
  closed: {
    margin: '10px 10px 10px 60px',
  },
  open: {
    margin: '10px 10px 10px 310px'
  },
  'columns-1': {
    gridTemplateColumns: '1fr'
  },
  'columns-2': {
    gridTemplateColumns: '1fr 1fr'
  },
  'columns-3': {
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  'columns-4': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
  },
  '@media (max-width: 400px)': {
    closed: {
      margin: '60px 10px 10px 10px'
    },
    open: {
      margin: '310px 10px 10px 10px'
    }
  }
}

class BaseGrid extends React.Component {
  render () {
    let { open, classes, width = 1100, children, ...rest } = this.props
    let margin = open ? 310 : 60
    let _width = (width || 1100) - margin
    let columns = Math.round(_width / 300)
    const className = classnames(
      classes.grid,
      classes[`columns-${columns}`],
      open ? classes.open : classes.closed
    )
    return (
      <div
        children={children}
        className={className}
      />
    )
  }
}

export default withWidth(withStyles(styles)(BaseGrid))
