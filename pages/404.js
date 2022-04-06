import Layout from '../Components/Layout'
import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const noEncontrado = () => {
  return (
    <Layout>
        
        <div className={styles.noEncontrado}>
            <h1 className='heading'>Pagina no encontrada</h1>

            <Link href='/'>Volver al inicio</Link>
        </div>

    </Layout>
  )
}

export default noEncontrado