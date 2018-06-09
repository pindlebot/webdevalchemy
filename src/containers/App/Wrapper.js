import React from 'react'
import Card from '../../components/Card'
import { Sidebar, Divider, Menu, MenuItem, Button } from 'alchemy-ui'
import injectSheet from 'react-jss'
import Grid from '../../components/Grid'

const styles = {
  sidebarButton: {
    color: '#fff',
    border: 0,
    background: 'transparent',
    width: '100%',
    justifyContent: 'flex-end'
  },
  menuItem: {
    width: '100%'
  }
}

class Wrapper extends React.PureComponent {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState(prev => {
      return { open: !prev.open }
    })
  }

  render () {
    const { classes } = this.props
    const { open } = this.state
    return (
      <React.Fragment>
        <Sidebar
          open={open}
          onClick={this.handleClick}
        >
          <Divider />
          <Menu>
            <MenuItem className={classes.menuItem}>
              <Button
                className={classes.sidebarButton}
                variant={'menuItemButton'}>
                  Home
              </Button>
            </MenuItem>
          </Menu>
        </Sidebar>
        <Grid
          open={open}
        >
          {this.props.tiles.map((tile, i) =>
            <Card {...tile} key={i} />)
          }
        </Grid>
      </React.Fragment>
    )
  }
}

Wrapper.defaultProps = {
  tiles: []
}

export default injectSheet(styles)(Wrapper)
