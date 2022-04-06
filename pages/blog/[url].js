import Layout from "../../Components/Layout"
import Image from 'next/image'
import { formatearFecha } from '../../Helpers/index'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ( { entrada } ) => {

    const { titulo, imagen, published_at, id, contenido } = entrada

    return (
        <Layout
            pagina={titulo}
        >
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image src={imagen.url} alt={`Imagen ${titulo}`} width={800} height={600} layout='responsive' />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>

                        <p className={styles.texto}>{contenido}</p>
                    </div>

                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {

    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map( entrada => ({
        params: { url: entrada.url }
    }) )

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps( { params: {url} } ) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada: entrada[0]
        }
    }
}

export default EntradaBlog