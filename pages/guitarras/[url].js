import Image from 'next/image'
import Layout from '../../Components/Layout'
import styles from '../../styles/Producto.module.css'

const Producto = ( { resultado } ) => {

    const { imagen, nombre, descripcion, precio, url, id } = resultado[0]

    const moneda = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio)

  return (
    <Layout pagina={nombre} >
        <div className={styles.producto}>
            <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Producto: ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{moneda}</p>

                <form className={styles.formulario}>
                    <label>Cantidad: </label>
                    <select>
                        <option value=''>--Seleccionar--</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                    </select>

                    <input type='submit' value='Agregar al carrito' />
                </form>

            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps( { query: {url} } ) {

    const urlProducto = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlProducto)
    const resultado = await respuesta.json()

    return {
        props: {
           resultado 
        }
    }

}

export default Producto