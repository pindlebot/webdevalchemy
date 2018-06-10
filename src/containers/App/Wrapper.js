import React from 'react'
import Card from '../../components/Card'
import { Sidebar, Divider, Menu, MenuItem, Button } from 'alchemy-ui'
import injectSheet from 'react-jss'
import Grid from '../../components/Grid'
import ContactForm from '../../components/ContactForm'

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
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }
}

class Wrapper extends React.PureComponent {
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
    const { open } = this.state
    return (
      <React.Fragment>
        <Sidebar
          open={open}
          onClick={this.handleClick}
        >
          <div className={classes.content}>
            <section>
              <Divider />
              <Menu>
                <MenuItem className={classes.menuItem}>
                  <Button
                    onClick={() => { window.location = '/' }}
                    className={classes.sidebarButton}
                    variant={'menuItemButton'}>
                      Home
                  </Button>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                  <Button
                    onClick={() => {
                      this.setState(prevState => {
                        return { form: !prevState.form }
                      })
                    }}
                    className={classes.sidebarButton}
                    variant={'menuItemButton'}>
                      Contact
                  </Button>
                </MenuItem>
              </Menu>
            </section>
            {this.state.form && <ContactForm />}
          </div>
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
