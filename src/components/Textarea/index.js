import React from 'react'
import { injectSheet } from 'alchemy-ui'

const styles = theme => ({
  root: {
    width: '100%',
    cursor: 'text',
    whiteSpace: 'inherit',
    wordWrap: 'inherit',
    borderWidth: 0,
    borderStyle: 'none',
    borderColor: 'transparent',
    padding: '5px',
    textRendering: 'auto',
    letterSpacing: 'normal',
    wordSpacing: 'normal',
    textTransform: 'none',
    textIndent: '0',
    textShadow: 'none',
    display: 'inline-block',
    textAlign: 'start',
    margin: 0,
    font: 'inherit',
    resize: 'none',
    color: '#fff',
    backgroundColor: theme.palette.primaryColorLight,
    '&:focus': {
      outline: 0
    }
  }
})

class Textarea extends React.Component {
  render () {
    const { classes, theme, ...rest } = this.props
    return (
      <textarea {...rest} className={classes.root} />
    )
  }
}

export default injectSheet(styles)(Textarea)
