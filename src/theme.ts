import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`

export const theme = {
  colors: {
    primary: '#4F46E5',
    secondary: '#EEEEEE',
    tertiary: "#2921AB", 
    background: '#fff',
    error: "#E15B5B",
    type: "#333333",
  },

  fonts: {
    "2xl": "2rem",
    xl: "1.25rem",
    lg: "1.125rem",
    base: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  }
}