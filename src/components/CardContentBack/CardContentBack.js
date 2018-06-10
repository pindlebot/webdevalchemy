import React from 'react'
import LinkExternalIcon from '../LinkExternalIcon'
import GithubMarkIcon from '../GithubMarkIcon'
import injectSheet from 'react-jss'

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
      <LinkExternalIcon className={props.classes.mark} />
      <a href={props.website}>{props.website}</a>
    </div>
    <div className={props.classes.detail}>
      <GithubMarkIcon className={props.classes.mark} />
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
    backgroundColor: theme.palette.textColorLight,
    borderRadius: '2px',
    width: 'auto',
    height: 'auto',
    padding: '1em',
    '&:hover': {
      backgroundColor: theme.palette.textColorLight,
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
      color: theme.palette.gray,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.white
      }
    },
    '&:last-child': {
      marginBottom: 0
    }
  }
})

export default injectSheet(styles)(CardContentBack)

