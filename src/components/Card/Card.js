import React from 'react'
import classNames from 'classnames'
import FontAwesome from '../FontAwesome'

import CardContentFront from '../CardContentFront'
import CardContentBack from '../CardContentBack'
import { withStyles } from 'alchemy-ui'

class Card extends React.Component {
  state = {
    flipped: false,
    hover: false,
    card: true
  }

  handleClick = (evt) => {
    this.setState(prev => ({
      flipped: !prev.flipped
    }))
  }

  onMouseLeave = () => {
    this.setState(prevState => !prevState.hover ? null : ({ hover: false }))
  }

  onMouseOver = () => {
    this.setState(prevState => prevState.hover ? null : ({ hover: true }))
  }

  renderContent = () => {
    const { flipped } = this.state
    return flipped
      ? <CardContentBack
        website={this.props.website}
        repo={this.props.repo}
        onMouseLeave={this.onMouseLeave}
      />
      : <CardContentFront
        title={this.props.title}
        description={this.props.description}
        image={this.props.image}
      />
  }

  render () {
    const { classes } = this.props
    const { flipped, hover } = this.state
    const className = classNames(
      classes.root,
      flipped ? classes.flipped : undefined
    )
    return (
      <section
        className={className}
        onClick={this.handleClick}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
      >
        <div className={classes.cardContent}>
          <span className={classes.icon}>
            <FontAwesome icon={'chevron-circle-right'} />
          </span>
          {this.renderContent()}
        </div>
      </section>
    )
  }
}

Card.defaultProps = {
  title: 'Title',
  website: 'http://google.com',
  repo: 'http://google.com',
  description: 'Lorem ipsum lorem ipsum',
  image: ''
}

const styles = theme => ({
  root: {
    border: `1px solid ${theme.palette.borderColor}`,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .05)',
    backgroundColor: `${theme.palette.white}`,
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
    transformStyle: 'preserve-3d',
    overflow: 'hidden',
    borderRadius: '2px',
    cursor: 'pointer',
    '& svg': {
      fill: '#fff'
    },
    '& h2': {
      color: '#fff'
    }
  },
  icon: {
    zIndex: 10,
    position: 'absolute',
    right: 10,
    top: 10,
    cursor: 'pointer',
    color: '#fff'
  },
  cardContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '2em',
    color: '#34495e'
  },
  flipped: {
    transform: 'rotateY(180deg)',
    border: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    cursor: 'unset',
    '& i': {
      color: '#34495e'
    },
    '& .flip-svg svg': {
      fill: '#B6D094'
    },
    '& .card-relief': {
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: '2px',
      width: 'auto',
      height: 'auto',
      padding: '1em',
      '&:hover': {
        '& svg': {
          fill: theme.palette.white
        }
      }
    },
    '& > div': {
      transform: 'rotateY(180deg)'
    }
  }
})

export default withStyles(styles)(Card)
