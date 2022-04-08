import Layout from '../Components/Layout'
import styles from '../styles/Carrito.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Carrito = ( { carrito, actualizarCantidad, eliminarProducto } ) => { 

    const [total, setTotal] = useState('')

    let totalString = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(total)

    useEffect(() => {
      const nuevoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
      setTotal(nuevoTotal)
    }, [carrito])
    

    return (
        <Layout pagina='Carrito de compras'>
            <h1 className='heading'>Carrito</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    {carrito.length === 0 ? (
                        'Carrito vacio'
                    ) : (
                        carrito.map( (producto) => {

                            const precioUnitario = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(producto.precio)
                            const operacion = producto.precio * producto.cantidad
                            const subtotal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(operacion)

                            return (
                                <div key={producto.id} className={styles.producto}>
                                    <div>
                                        <Image layout='responsive' width={250} height={500} alt={`Producto ${producto.nombre}`} src={producto.imagen} />
                                    </div>
                                    <div className={styles.descripcion}>
                                        <p className={styles.nombre}>{producto.nombre}</p>
                                        <div className={styles.cantidad}>
                                            Cantidad {''}
                                            <select
                                                value={producto.cantidad}
                                                onChange={e => actualizarCantidad({
                                                    id: producto.id,
                                                    cantidad: e.target.value
                                                })}
                                                className={styles.select}
                                            >
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                            </select>
                                        </div>
                                        <p className={styles.precio}>Precio: <span>{precioUnitario}</span></p>
                                        <p className={styles.subtotal}>Subtotal: <span>{subtotal}</span></p>
                                    </div>
                                    <button
                                        type='button'
                                        className={styles.boton}
                                        onClick={() => eliminarProducto(producto.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            )
                         } )
                    )}
                </div>

                <div className={styles.resumen}>

                    {total > 0 ? (
                        <>
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: {totalString} </p>
                        </>
                    ) : (
                        <>
                            <p>No hay productos en el carrito</p>
                        </>
                    ) }

                </div>
            </main>
        </Layout>
    )
}

export default Carrito