import React from 'react'
import { ThemeProvider } from 'react-jss'
import Wrapper from './Wrapper'

const theme = {
  button: {
    //padding: '8px 16px',
    borderRadius: '2px',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    backgroundColor: '#E7F6F6'
  },
  palette: {
    primaryColor: '#FE654F',
    primaryColorLight: '#FE816F',
    primaryColorLightest: '#FE9789',
    textColor: '#0B032D',
    textColorLight: '#373053',
    borderColor: '#e8e8e8',
    backgroundColor: '#f9f9f9',
    gray: '#E7F6F6',
    white: '#fff'
  },
  input: {
    width: '100%',
    // background: $primaryColorLight;
    borderRadius: '2px',
    padding: '5px',
    // color: $white;
    '&::placeholder': {
      color: '#000'
    }
  },
  menuItem: {
    color: '#fff',
    textAlign: 'right',
    backgroundColor: '#FE816F',
    borderRadius: '2px',
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: '#FE9789'
    }
  }
}

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper {...this.props} />
      </ThemeProvider>
    )
  }
}

App.defaultProps = {
  tiles: []
}

export default App
