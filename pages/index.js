import Blog2 from '../components/Blog2'
import Navbar from '../components/Navbar'

export default function Home({ blogg }) {

  return (
    <div>
      <Navbar/>
      <div className="Home-Blogposts">
        {blogg.map(blog => <Blog2 key={blog._id} blog={blog}/>)}
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://sore-cyan-twill.cyclic.app/api/blogs')
  const blogg = await res.json()

  return { props: { blogg } }
}

