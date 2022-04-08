import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ( { children, pagina, producto } ) => {
  return (
    <div>
        <Head>
            <title>{`GuitarLa - ${pagina}`}</title>
            <meta name='desription' content='Sitio web de venta de guitarras' />
        </Head>
        <Header producto={producto} />
        {children}
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
  producto: null
}

export default Layout