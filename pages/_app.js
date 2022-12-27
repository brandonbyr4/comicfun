import '../styles/globals.css'
import { ContextWrapper } from '/state/context-manager'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return <div>
    <ContextWrapper>
      <Component {...pageProps} />
      <Analytics /> 
    </ContextWrapper>
  </div>
}

export default MyApp
