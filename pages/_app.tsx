import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/UIElements/Layout'
import { WeatherProvider } from '../context/weatherContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WeatherProvider>
  )
}

export default MyApp
