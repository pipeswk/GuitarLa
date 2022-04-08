import '../styles/normalize.css'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const [estado, setEstado] = useState(false)
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLS)
  }, []);
  
  

  useEffect(() => {
    if(estado === true) {
      localStorage.setItem('carrito', JSON.stringify(carrito))
      setEstado(false)
    }
  }, [estado]);
  

  const agregarCarrito = (producto) => {
    if(carrito.some(articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map( (articulo) => {
        if(articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo
      } )
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }

    setEstado(true)

  }

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map( (articulo) => {
      if(articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad
      }
      return articulo
    } )
    setCarrito(carritoActualizado)
    setEstado(true)
  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter( (articulo) => articulo.id !== id )
    setCarrito(carritoActualizado)
    setEstado(true)
  }

  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
