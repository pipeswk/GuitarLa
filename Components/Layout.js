import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ( { children, pagina } ) => {
  return (
    <div>
        <Head>
            <title>{`GuitarLa - ${pagina}`}</title>
            <meta name='desription' content='Sitio web de venta de guitarras' />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout