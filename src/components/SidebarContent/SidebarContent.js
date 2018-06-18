import React from 'react'
import { Divider, Menu, MenuItem, Button } from 'alchemy-ui'
import ContactForm from '../ContactForm'
import Details from '../Details'

class SidebarContent extends React.Component {
  render () {
    const {
      classes,
      form,
      open,
      onClickHome,
      onClickContact,
      ...rest
    } = this.props
    if (!open) return null
    return (
      <div className={classes.content}>
        <section>
          <Divider />
          <Menu>
            <MenuItem className={classes.menuItem}>
              <Button
                onClick={onClickHome}
                className={classes.sidebarButton}
                variant={'menuItemButton'}>
                  Home
              </Button>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <Button
                onClick={onClickContact}
                className={classes.sidebarButton}
                variant={'menuItemButton'}>
                  Contact
              </Button>
            </MenuItem>
          </Menu>
        </section>
        {form
          ? <ContactForm />
          : <Details />
        }
      </div>
    )
  }
}

export default SidebarContent
