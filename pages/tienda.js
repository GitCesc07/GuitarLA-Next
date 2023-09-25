import Layout from "../components/layout"
import Guitarras from "@/components/guitarras";
import styles from "../styles/grid.module.css"


export default function Tienda({guitarras}) {

  console.log(guitarras[0].attributes)

  return (
    <Layout
      title={"Tienda Virtual"}
      description="Tienda virtual, venta de Guitarras, instrumentos, GuitarLA"
    >
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>

     <div className={styles.grid}>
         {guitarras?.map(guitarra => (
        <Guitarras
          key={guitarra.id}
          guitarra={guitarra.attributes}
        />
      ))}
     </div>
    </main>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)

//   const {data: guitarras} = await respuesta.json();

//   return {
//     props: {
//       guitarras 
//     }
//   }
// } 


export async function getServerSideProps() {
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );

  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      guitarras
    }
  };
}