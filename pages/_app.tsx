import Head from '../src/components/Head'
import { ThemeProvider } from 'styled-components'
import Modal from "react-modal"

import { GlobalStyle, theme } from '../src/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head title="CRUD Educacional"/>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
