import React from 'react'
import { ThemeProvider } from 'react-jss'

const withThemeProvider = theme => Component => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
)

export default withThemeProvider
