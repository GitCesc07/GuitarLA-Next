import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen Nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem ut tempora eaque corrupti suscipit quis, dolores et fuga accusamus unde non nesciunt voluptate porro ratione eos consequatur architecto ipsum.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quia reprehenderit veniam, neque harum eos fugiat assumenda illo cumque quos tempora, rerum nihil nulla sunt dolorum voluptates fuga cupiditate accusamus?
              Amet nam ratione nobis iusto vero molestias dolorem libero dolores ipsam aut porro quis cumque ipsa necessitatibus nostrum corporis quia atque, harum officia? Commodi temporibus porro, tempore sint explicabo consectetur!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
