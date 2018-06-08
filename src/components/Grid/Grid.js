import React from 'react'
import Card from '../Card'
import Sidebar from '../Sidebar'
import classnames from 'classnames'

class Grid extends React.PureComponent {
  state = {
    open: false
  }

  handleClose = () => {
    if (this.state.open) {
      this.setState({ open: false })
    }
  }

  handleClick = () => {
    this.setState(prev => ({ open: !prev.open }))
  }

  getColumns = () => {
    const { width } = this.props.window
    let offset = this.state.open ? 300 : 0
    return (width - offset) > 768
      ? 3
      : (width - offset) > 481
        ? 2
        : 1
  }

  render () {
    console.log(this.props)
    const { open } = this.state
    return (
      <div className={classnames({ wrapper: true, ...this.state })}>
        <Sidebar
          open={open}
          handleClick={this.handleClick}
        />
        <main
          className={classnames('grid', `columns-${this.getColumns()}`)}
        >
          {this.props.tiles.map((tile, i) =>
            <Card {...tile} key={i} />)
          }
        </main>
      </div>
    )
  }
}

Grid.defaultProps = {
  tiles: []
}

export default Grid
