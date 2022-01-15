import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import theme from './theme'

type ThemeProps = {
  children: ReactNode
}

const Theme = ({ children, ...rest }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <div {...rest}>{children}</div>
    <GlobalStyles />
  </ThemeProvider>
)

export default Theme
