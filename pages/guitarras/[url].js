import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"


export default function Producto({ guitarra, agregarCarrito }) {

  const MySwal = withReactContent(Swal)

  const [cantidad, setCantidad] = useState(0)
  console.log(guitarra)

  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      // alert("")

      MySwal.fire(
        "Carrito de Compra",
        "Cantidad no valida",
        "error"
      )

      return;
    }

    // Construir un objeto = 
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    MySwal.fire({
      title: "Agregar Carrito de Compra",
      showDenyButton: true,
      icon: "question",
      text: "¿Seguro desea agregar al Carrito de Compras?",
      confirmButtonText: "Si, Agregar",
      confirmButtonColor: "success",
      denyButtonText: "No, Agregar",
      denyButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Guardado Correctamente", "", "success")
        // Pasando la información
        agregarCarrito(guitarraSeleccionada)
      }
    })
  }

  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen Guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario}
            onSubmit={handleSubmit}
          >
            <label htmlFor="cantidad">Cantidad:</label>

            <select id="cantidad"
              onChange={e => setCantidad(+e.target.value)}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al Carrito"></input>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url,
    }
  }))


  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { url } }) {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

  const { data: guitarra } = await respuesta.json()

  return {
    props: {
      guitarra
    }
  }
}

// export async function getServerSideProps({ query: { url } }) {

//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populete=imagen`)

//   const { data: guitarra } = await respuesta.json()

//   return {
//     props: {
//       guitarra
//     }
//   }
// }