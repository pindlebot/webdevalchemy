import React from 'react'
import LinkExternalIcon from '../LinkExternalIcon'
import GithubMarkIcon from '../GithubMarkIcon'

const CardContentBack = props => (
  <div className='card-relief'
    onMouseOver={evt => {
      evt.stopPropagation()
      props.onMouseLeave(evt)
    }}
    onClick={(evt) => {
      evt.stopPropagation()
    }}>
    <div className='card-detail'>
      <LinkExternalIcon />
      <a href={props.website}>{props.website}</a>
    </div>
    <div className='card-detail'>
      <GithubMarkIcon />
      <a href={props.repo}>{props.repo}</a>
    </div>
  </div>
)

CardContentBack.defaultProps = {
  onMouseLeave: () => {},
  website: '',
  repo: ''
}

export default CardContentBack
