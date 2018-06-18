import React from 'react'
// import { injectSheet } from 'alchemy-ui'
import FontAwesome from '../FontAwesome'
import { withStyles } from 'alchemy-ui'

const CardContentBack = props => (
  <div className={props.classes.inset}
    onMouseOver={evt => {
      evt.stopPropagation()
      props.onMouseLeave(evt)
    }}
    onClick={(evt) => {
      evt.stopPropagation()
    }}>
    <div className={props.classes.detail}>
      <FontAwesome icon={'link'} />
      <a href={props.website}>{props.website}</a>
    </div>
    <div className={props.classes.detail}>
      <FontAwesome icon={'github'} />
      <a href={props.repo}>{props.repo}</a>
    </div>
  </div>
)

CardContentBack.defaultProps = {
  onMouseLeave: () => {},
  website: '',
  repo: ''
}

const styles = theme => ({
  inset: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: theme.palette.textColorLight,
    borderRadius: '2px',
    width: 'auto',
    height: 'auto',
    padding: '1em',
    '&:hover': {
      // backgroundColor: theme.palette.textColorLight,
      '& svg': {
        fill: theme.palette.white
      }
    }
  },
  mark: {
    marginRight: '8px'
  },
  detail: {
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
    '& > a': {
      color: '#34495e',
      textDecoration: 'none',
      '&:hover': {
        color: '#333'
      }
    },
    '&:last-child': {
      marginBottom: 0
    }
  }
})

export default withStyles(styles)(CardContentBack)
