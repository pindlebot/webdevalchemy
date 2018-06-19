import React from 'react'
import Card from '../../components/Card'
import { Sidebar, withStyles } from 'alchemy-ui'
import BaseGrid from '../../components/BaseGrid'
import SidebarContent from '../../components/SidebarContent'

const styles = {
  sidebarButton: {
    color: '#7f8c8d',
    border: 0,
    background: '#f6f6f6',
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: '3px'
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%'
  },
  menuItem: {
    width: '100%',
    color: '#7f8c8d',
    textAlign: 'right',
    backgroundColor: '#f6f6f6',
    borderRadius: '2px',
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: '#f6f6f6'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  sidebar: {
    backgroundColor: '#0064e1'
  }
}

class App extends React.Component {

  static defaultProps = {
    tiles: []
  }

  state = {
    open: false,
    form: false
  }

  handleClick = () => {
    this.setState(prev => {
      return { open: !prev.open }
    })
  }

  render () {
    const { classes } = this.props
    const { open, form } = this.state
    return (
      <React.Fragment>
        <Sidebar
          open={open}
          onClick={this.handleClick}
          className={classes.sidebar}
          classes={{
            // hamburger: classes.hamburger
          }}
        >
          <SidebarContent
            {...this.props}
            open={open}
            form={form}
            onClickHome={() => { window.location = '/' }}
            onClickContact={() => {
              this.setState(prevState => ({ form: !prevState.form }))
            }}
          />
        </Sidebar>
        <BaseGrid
          open={open}
        >
          {this.props.tiles.map((tile, i) =>
            <Card {...tile} key={i} />)
          }
        </BaseGrid>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)
