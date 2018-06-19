import React from 'react'
import { AlchemyThemeProvider } from 'alchemy-ui'

const withThemeProvider = theme => Component => props => (
  <AlchemyThemeProvider theme={theme}>
    <Component {...props} />
  </AlchemyThemeProvider>
)

export default withThemeProvider
