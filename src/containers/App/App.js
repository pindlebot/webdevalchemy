import React from 'react'
import Grid from '../../components/Grid'
import debounce from 'lodash.debounce'

class App extends React.Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = debounce((evt) => {
    let { innerHeight: height, innerWidth: width } = evt.srcElement
    this.setState({ width, height })
  }, 200)

  render () {
    return (
      <Grid {...this.props} window={this.state} />
    )
  }
}

App.defaultProps = {
  tiles: []
}

export default App
