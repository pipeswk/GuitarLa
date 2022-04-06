import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Producto.module.css'

const Producto = ( { producto } ) => {

    const { imagen, nombre, descripcion, precio, url } = producto

    const moneda = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio)

  return (
    <div className={styles.producto}>
        
        <Link href={`/guitarras/${url}`}>
            <a>
                <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Producto: ${nombre}`} />
            </a>
        </Link>

        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>{moneda}</p>
            <Link href={`/guitarras/${url}`}>
                <a className={styles.boton}>
                    Ver producto
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Producto