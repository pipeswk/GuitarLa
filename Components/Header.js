import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

const Header = ( { producto } ) => {

    const router = useRouter()
    
    const valor = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(producto?.precio)

  return (
    <header className={styles.header}>
        <div className='contenedor'>

            <div className={styles.barra}>
                <Link href='/'>
                    <a>
                     <Image src='/img/logo.svg' width={400} height={100} alt='Logo' />
                    </a>
                </Link>

                <nav className={styles.navegacion}>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/tienda'>Tienda</Link>
                    <Link href='/carrito'>
                        <a>
                            <Image layout='fixed' width={30} height={25} alt='carrito' src='/img/carrito.png' />
                        </a>
                    </Link>
                </nav>
            </div>

            {producto && (
                <div className={styles.modelo}>
                    <h2>{producto.nombre}</h2>
                    <p className={styles.descripcion}>{producto.descripcion}</p>
                    <p className={styles.precio}>{valor}</p>
                    <Link href={`/guitarras/${producto.url}`}>
                        <a className={styles.boton}>
                            Ver producto
                        </a>
                    </Link>
                </div>
            )}

        </div>

        {router.route === '/' && (
            <img className={styles.guitarra} src='/img/header_guitarra.png' alt='Header guitarra' />
        )}

    </header>
  )
}

export default Header