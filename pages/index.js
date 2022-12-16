import Blog2 from '../components/Blog2'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home({ blogg }) {

  return (
    <div>
      <Sidebar/>
      <Navbar/>


      <div className="Home-Search">
        <div className="Search-bar">
          <div className="Search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input type="text" placeholder='Search' />
        </div>
        <div className="sf-wrapper">
          <div className="Search-Filter">Design</div>
          <div className="Search-Filter">Development</div>
          <div className="Search-Filter">React.js</div>
          <div className="Search-Filter">Marketing</div>
        </div>
      </div>


      <div className="Home-Heading">
        <h4>Articles</h4>
        <div className="Sort-Wrapper">
          <span className='sort-text'>Following</span>
          <span className='down-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
      </div>

      <div className="HPD-wrapper">
        <div className="Divider"></div>
      </div>

      <div className="Home-Blogposts">
        {blogg && blogg.map(blog => <Blog2 blog={blog}/>)}
      </div>

    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://sore-cyan-twill.cyclic.app/api/blogs')
  const blogg = await res.json()

  return { props: { blogg } }
}

