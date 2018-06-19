import React from 'react'
import { withStyles, withWidth } from 'alchemy-ui'
import classnames from 'classnames'

const styles = {
  grid: {
    display: 'grid',
    gridGap: '20px',
    gridAutoRows: 'calc(33vh - 20px)'
  },
  closed: {
    margin: '20px 20px 20px 70px'
  },
  open: {
    margin: '20px 20px 20px 320px'
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
  '@media (min-width: 481px) and (max-width: 767px)': {
    grid: {
      gridAutoRows: 'calc(33vh - 10px)'
    },
    closed: {
      margin: '10px 10px 10px 60px'
    },
    open: {
      margin: '10px 10px 10px 310px'
    }
  },
  '@media (max-width: 480px)': {
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
    let { open, classes, width = 1280, children, ...rest } = this.props
    let columns = Math.round((width - (open ? 320 : 70)) / 300)
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
