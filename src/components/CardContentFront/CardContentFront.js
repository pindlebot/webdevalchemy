import React from 'react'
import injectSheet from 'react-jss'

const CardContentFront = props => (
  <React.Fragment>
    <h2>{props.title}</h2>
    <div className='card-description'>{props.description}</div>
    <div className='card-image'
      style={{
        backgroundImage: `url(${props.image})`
      }}
    />
  </React.Fragment>
)

CardContentFront.defaultProps = {
  title: '',
  image: '',
  description: ''
}

const styles = {
  image: {
    left: 0,
    top: 0,
    zIindex: -1,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transform: 'scale(1.5)',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.7
  }
}

export default CardContentFront
