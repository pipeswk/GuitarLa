import Layout from '../../Components/Layout'
import Image from 'next/image'
import styles from '../../styles/Curso.module.css'

const Curso = ( { curso } ) => {

    const { titulo, contenido, imagen } = curso

  return (
    <Layout pagina={titulo} >
        <div className={styles.curso}>
            
            <div className={styles.imagen}>
                <Image layout='responsive' width={180} height={120} src={imagen.url} alt={`Curso: ${titulo}`} />
            </div>

            <div className={styles.contenidoCurso}>
                <h3 className='heading'>{titulo}</h3>
                <p>{contenido}</p>
                <a className={styles.boton}>Comprar curso</a>
            </div>

        </div>
    </Layout>
  )
}

export async function getServerSideProps( { query: {url} } ) {
    const urlCurso = `${process.env.API_URL}/cursos?url=${url}`
    const respuesta = await fetch(urlCurso)
    const curso = await respuesta.json()

    return {
        props: {
            curso
        }
    }
}

export default Curso