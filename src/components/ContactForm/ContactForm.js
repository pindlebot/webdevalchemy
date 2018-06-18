import React from 'react'
import { FormControl, Input, Button } from 'alchemy-ui'
import Textarea from '../Textarea'
import { withStyles } from 'alchemy-ui'

const styles = theme => ({
  input: {
    width: '100%',
    border: 0,
    outline: 0,
    background: theme.palette.primaryColorLight,
    borderRadius: '2px',
    padding: '5px',
    color: theme.palette.white,
    '&::placeholder': {
      color: theme.palette.white,
      opacity: 1
    }
  },
  button: {
    border: 0,
    color: '#7f8c8d'
  },
  form: {
    border: '2px dashed #f6f6f6',
    padding: '20px 10px 10px 10px',
    marginBottom: '1em'
  },
  right: {
    justifyContent: () => 'flex-end'
  }
})

class ContactForm extends React.Component {
  state = {
    email: '',
    name: '',
    message: ''
  }

  handleChange = (evt, key) => {
    this.setState({ [key]: evt.target.value })
  }

  submit = () => {}

  render () {
    const { classes } = this.props
    return (
      <form
        className={classes.form}
        action={'https://formspree.io/bgardner620@gmail.com'}
        method={'POST'}
      >
        <FormControl>
          <Input
            placeholder='Name'
            onChange={evt => this.handleChange(evt, 'name')}
            value={this.state.name}
            className={classes.input}
            name={'name'}
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder='Email'
            onChange={evt => this.handleChange(evt, 'email')}
            value={this.state.email}
            className={classes.input}
            name={'email'}
          />
        </FormControl>
        <FormControl>
          <Textarea
            value={this.state.message}
            onChange={evt => this.handleChange(evt, 'message')}
            name={'message'}
          />
        </FormControl>

        <FormControl className={classes.right}>
          <Button
            type={'submit'}
            className={classes.button}
            onClick={this.submit}>Submit</Button>
        </FormControl>
      </form>
    )
  }
}

export default withStyles(styles)(ContactForm)
