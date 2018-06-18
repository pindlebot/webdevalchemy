import React from 'react'
import { withStyles } from 'alchemy-ui'

const CardContentFront = props => (
  <React.Fragment>
    <h2>{props.title}</h2>
    <div className={props.classes.description}>{props.description}</div>
    <div className={props.classes.image}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`
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
  description: {
    color: '#fff',
    textAlign: 'center'
  },
  image: {
    left: 0,
    top: 0,
    zIndex: -1,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
}

export default withStyles(styles)(CardContentFront)
