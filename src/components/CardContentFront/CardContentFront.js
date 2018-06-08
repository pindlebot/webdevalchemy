import React from 'react'

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

export default CardContentFront
