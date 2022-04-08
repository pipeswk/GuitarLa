import Layout from '../Components/Layout'
import Listado from '../Components/Listado'
import Curso from '../Components/Curso'


export default function Home( { productos, cursos } ) {


  return (
    <Layout
      pagina='Inicio'
      producto={productos[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra coleccion</h1>

        <Listado
          productos={productos}
        />

      </main>

      <Curso
        cursos={cursos}
      />

    </Layout>
  )
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`

  const [ resGuitarras, resCursos ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ])

  const [ productos, cursos ] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
  ])


  return {
    props: {
      productos,
      cursos
    }
  }
}
