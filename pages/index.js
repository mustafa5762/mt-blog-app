import Link from 'next/link'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

export default function Home({ blogg }) {

  return (
    <div>
      <Login/>
      <Navbar/>
      {blogg.map(blog => <Link href={"/blogs/" + blog._id}>{blog.title}</Link>)}
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://ecomm-backend2.herokuapp.com/api/blogs')
  const blogg = await res.json()

  return { props: { blogg } }
}

