import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import {FiSearch,FiChevronDown} from 'react-icons/fi'


function Navbar({setlog}) {

  const [user, loading] = useAuthState(auth);

  const darkmode = () => {
    document.documentElement.style.setProperty('--primary-text', '#fafafa')
    document.documentElement.style.setProperty('--secondary-text', '#d4d4d4')
    document.documentElement.style.setProperty('--icon-color', '#737373')
    document.documentElement.style.setProperty('--border', '#404040')
    document.documentElement.style.setProperty('--white', '#171717')
  }

  return (
    <div>
        <div className="Navbar">
          <div></div>
            <div className="Search-bar">
              <div onClick={() => auth.signOut()} className="Search-icon">
                <FiSearch/>
              </div>
              <input type="text" placeholder='Search' />
            </div>
            {
              loading ?
              <div className="username">Loading</div>
              :
            <div>
              { !user &&
              <div onClick={() => setlog(true)} className="Button">Get Started</div>
              }
              {
                user &&
                <div className="user">
                  <div onClick={darkmode} style={{marginRight: 25}} className="Icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="whwh">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  </div>
                  <div style={{marginRight: 7}} className="Avatar">
                    <img referrerPolicy="no-referrer" src={user.photoURL} alt="" />
                  </div>
                </div>
              }
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar