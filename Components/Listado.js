import Producto from "./Producto"
import styles from '../styles/Listado.module.css'

const Listado = ( { productos } ) => {


  return (
    <div className={styles.listado}>
        {productos.map( (producto) => (
            <Producto
                key={producto.id}
                producto={producto}
            />
        ) )}
    </div>
  )
}

export default Listado