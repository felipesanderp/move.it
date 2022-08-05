import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>

  )
}

export default MyApp
