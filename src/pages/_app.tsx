import type { AppProps } from 'next/app'

import { globalStyle } from '@styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
