import '../styles/globals.css'
import { initIcon } from '../components/IconLibrary.js'

initIcon()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
