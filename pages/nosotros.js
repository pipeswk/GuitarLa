import Layout from '../Components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>

          <div className={styles.contenido}>

            <Image src='/img/nosotros.jpg' width={600} height={450} layout='responsive' alt='Imagen sobre nosotros' />

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna leo, auctor sit amet nibh sit amet, placerat rhoncus mi. Aliquam finibus turpis sed dignissim malesuada. Cras imperdiet sodales ante, at bibendum urna fermentum vel. Nunc vel nunc efficitur, pretium nunc quis, faucibus lacus. Sed sodales nec lectus non tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer semper nibh tempus metus consequat, vitae fringilla massa suscipit. Nullam fringilla purus neque, vel lobortis nibh eleifend euismod. Nulla laoreet tellus ac ullamcorper tempor. Suspendisse non neque finibus, tempor nisi ut, pretium mi.
            </p>

          </div>

        </main>
    </Layout>
  )
}

export default Nosotros