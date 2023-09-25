import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css"

export default function Guitarras({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen Guitarra ${nombre}`}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link legacyBehavior href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-eye"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              // stroke="#000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
            </svg>
            Ver Producto
          </a>
        </Link>
      </div>
    </div>
  );
}
