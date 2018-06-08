import React from 'react'
import HamburgerIcon from '../HamburgerIcon'

const Input = props => <input {...props} />

Input.defaultProps = {
  name: '',
  email: '',
  message: ''
}

const FormControl = props => <div className='form-control'>{props.children}</div>

class ContactForm extends React.Component {
  state = {}

  handleChange = (evt, key) => {
    this.setState({ [key]: evt.target.value })
  }

  submit = () => {
    
  }

  render () {
    return (
      <form>
        <FormControl>
          <Input
            placeholder='Name'
            onChange={evt => this.handleChange(evt, 'name')}
            value={this.state.name || ''}
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder='Email'
            onChange={evt => this.handleChange(evt, 'email')}
            value={this.state.email || ''}
          />
        </FormControl>
        <FormControl>
          <div contentEditable />
        </FormControl>

        <FormControl>
          <button className='submit' onClick={this.submit}>Submit</button>
        </FormControl>
      </form>
    )
  }
}

const Hamburger = props => (
  <div className='hamburger'>
    <button onClick={props.handleClick}>
      <HamburgerIcon />
    </button>
  </div>
)

const MenuItem = props =>
  <li
    className='menu-item'
    onClick={props.onClick}>
    {props.label}
  </li>

const Menu = props => !props.open ? null : (
  <ul className='menu'>
    {props.items.map((item, i) => (
      <MenuItem {...item} key={i} />
    ))}
  </ul>
)

class Sidebar extends React.Component {
  state = {
    form: false
  }

  items = [{
    label: 'home',
    onClick: () => {
      window.location = '/'
    }
  }, {
    label: 'Contact',
    onClick: (evt) => {
      this.setState(prevState => ({
        form: !prevState.form
      }))
    }
  }]

  render () {
    const className = this.props.open ? 'open' : 'closed'
    return (
      <aside>
        <div className='pad'>
          <Hamburger handleClick={this.props.handleClick} />
          <Menu open={this.props.open} items={this.items} />
        </div>
        {this.state.form && this.props.open && <ContactForm />}
      </aside>
    )
  }
}

export default Sidebar
