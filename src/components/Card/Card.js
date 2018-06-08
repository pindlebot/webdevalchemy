import React from 'react'
import classNames from 'classnames'
import SyncIcon from '../SyncIcon'
import CardContentFront from '../CardContentFront'
import CardContentBack from '../CardContentBack'

class Card extends React.PureComponent {
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
    const className = classNames(this.state)
    return (
      <section
        className={className}
        onClick={this.handleClick}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
      >
        <div className='card-content'>
          <SyncIcon />
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

export default Card
