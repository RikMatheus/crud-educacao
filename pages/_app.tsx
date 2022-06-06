import Head from '../src/components/organisms/Head'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../src/contexts/AuthContext'

import { GlobalStyle, theme } from '../src/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head title="CRUD Educacional"/>
      <AuthProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
