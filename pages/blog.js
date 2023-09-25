import Layout from "../components/layout"
import Post from "../components/posts"
import styles from "../styles/grid.module.css"


function Blog({ posts }) {

  return (
    <Layout
      title={"Blog"}
      description="Blog de música, ventas de Guitarras, consejos, GuitarLA"
    >
      <main className="contenedor">
        <h2 className="heading">Blog</h2>

        <div className={styles.grid}>
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)

  const { data: posts } = await respuesta.json();

  return {
    props: {
      posts
    }
  }
}

export default Blog
