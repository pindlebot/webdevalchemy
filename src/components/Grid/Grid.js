import React from 'react'
import { Grid } from 'alchemy-ui'
import withWidth from '.././../util/withWidth'
import injectSheet from 'react-jss'

const BaseGrid = props => {
  let { width, height, open, ...rest } = props
  let margin = open ? 310 : 60
  let _width = (width || 700) - margin
  let columns = Math.round(_width / 300)
  const styles = {
    grid: {
      margin: `10px 10px 10px ${margin}px`
    },
    '@media (max-width: 400px)': {
      grid: {
        margin: `${margin}px 10px 10px 10px`
      }
    }
  }
  const Component = injectSheet(styles)(
    ({ classes, ...rest }) => <Grid {...rest} className={classes.grid} />
  )
  return <Component {...rest} columns={columns} />
}

export default withWidth(BaseGrid)
