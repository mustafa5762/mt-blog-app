import React from 'react'
import Button from './Button'
import {BiSearch} from 'react-icons/bi'
import Spost from './Spost'

function Sidebar({blogs}) {
  return (
    <div>
        <div className="Sidebar-wrapper">
          <div>
            <Button>Get Started</Button>
            <div className="Search-bar">
              <div className="Search-icon">
                <BiSearch size={20}/>
              </div>
              <input type="text" placeholder='Search' />
            </div>
            <div className="St">Trending Articles</div>
            {blogs.map(blog => <Spost blog={blog}/>)}
          </div>
        </div>
    </div>
  )
}

export default Sidebar