import Layout from '../components/Layout'
import { AuthProvider } from '../context/AuthContext'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp