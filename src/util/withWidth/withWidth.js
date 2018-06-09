import React from 'react'
import debounce from 'lodash.debounce'

const withWidth = Component => class Wrapped extends React.Component {
  state = {
    width: undefined,
    height: undefined
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)

    if (!this.state.width) {
      this.setState({
        width: this.ref.clientWidth,
        height: this.ref.clientHeight
      })
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = debounce((evt) => {
    let { clientWidth: width, clientHeight: height } = this.ref.firstChild
    this.setState({ width, height })
  }, 200)

  setRef = ref => {
    this.ref = ref
  }

  render () {
    return (
      <div ref={this.setRef} style={{height: '100%', width: '100%'}}>
        <Component
          {...this.props}
          {...this.state}
        />
      </div>
    )
  }
}

export default withWidth
