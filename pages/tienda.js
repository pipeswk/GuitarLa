import Layout from '../Components/Layout'
import Listado from '../Components/Listado'

const Tienda = ( { productos } ) => {


  return (
    <Layout
        pagina='Tienda'
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <Listado
            productos={productos}
          />
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`
  const respuesta = await fetch(url)
  const productos = await respuesta.json()
  console.log('Productos leidos')
  return {
    props: {
      productos
    }
  }
}

export default Tienda