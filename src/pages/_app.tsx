import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyle } from '@styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>박성준 - 트리플 과제</title>
      </Head>
      {globalStyle}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
