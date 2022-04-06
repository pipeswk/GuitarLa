import { formatearFecha } from '../Helpers'
import styles from '../styles/Entrada.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Entrada = ( { entrada } ) => {

    const { titulo, resumen, imagen, published_at, id, url } = entrada

  return (
    <article>
        <Link href={`/blog/${url}`}>
            <a>
              <Image priority='true' src={imagen.url} alt={`Imagen blog ${titulo}`} height={600} width={800} layout='responsive' />
            </a>
        </Link>
        <div className={styles.contenido}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.boton}>
                  Leer entrada
                </a>
            </Link>

        </div>
    </article>
  )
}

export default Entrada