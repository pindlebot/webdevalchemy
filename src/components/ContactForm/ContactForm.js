import React from 'react'
import { FormControl, Input, Button } from 'alchemy-ui'
import injectSheet from 'react-jss'

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
    border: 0
  },
  form: {
    border: '2px dashed #E7F6F6',
    padding: '20px 10px 10px 10px'
  },
  right: {
    justifyContent: () => 'flex-end'
  }
})

class ContactForm extends React.Component {
  state = {
    email: '',
    name: ''
  }

  handleChange = (evt, key) => {
    this.setState({ [key]: evt.target.value })
  }

  submit = () => {}

  render () {
    const { classes } = this.props
    return (
      <form className={classes.form}>
        <FormControl>
          <Input
            placeholder='Name'
            onChange={evt => this.handleChange(evt, 'name')}
            value={this.state.name}
            className={classes.input}
          />
        </FormControl>
        <FormControl>
          <Input
            placeholder='Email'
            onChange={evt => this.handleChange(evt, 'email')}
            value={this.state.email}
            className={classes.input}
          />
        </FormControl>
        <FormControl>
          <div contentEditable />
        </FormControl>

        <FormControl className={classes.right}>
          <Button
            className={classes.button}
            onClick={this.submit}>Submit</Button>
        </FormControl>
      </form>
    )
  }
}

export default injectSheet(styles)(ContactForm)
