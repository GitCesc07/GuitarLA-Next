import { useEffect, useState } from "react";
import Layout from "../components/layout"
import styles from "../styles/carrito.module.css"
import Image from "next/image"

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)

    setTotal(calculoTotal)
  }, [carrito])

  return (
    <Layout title="Carrito de Compra">
      <main className="contenedor">
        <h1 className="heading">Carrito de Compras</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>

            {carrito.length === 0
              ? "Carrito Vacío"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={380}
                        src={producto.imagen}
                        alt={producto.nombre}
                      />
                    </div>

                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>

                        <select
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        $<span>{producto.precio}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{producto.cantidad * producto.precio}</span>
                      </p>
                    </div>

                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
