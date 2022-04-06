import { useEffect } from 'react'
import Layout from '../Components/Layout'
import Entrada from '../Components/Entrada'
import styles from '../styles/Blog.module.css'


const Blog = ( { resultado } ) => {  
  
  return (
    <Layout
        pagina='Blog'
    >
        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>

          <div className={styles.blog}>
            {resultado.map( (entrada) => (
              <Entrada 
                key={entrada.id}
                entrada={entrada}
              />
            ) )}
          </div>

        </main>
    </Layout>
  )
}

export async function getStaticProps() {

  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  // Si se aplica un consolo.log(resultado) no se visualiza en la consola cliente sino en la consola server
  return {
    props: {
      resultado
    }
  }

}

export default Blog