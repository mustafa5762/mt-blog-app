import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import {FiSearch,FiChevronDown} from 'react-icons/fi'


function Navbar() {

  const [user, loading] = useAuthState(auth);

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
              <div className="username">LOading</div>
              :
            <div>
              { !user &&
              <div className="Button">Get Started</div>
              }
              {
                user &&
                <div className="user">
                  <div className="Avatar">
                    <img referrerPolicy="no-referrer" src={user.photoURL} alt="" />
                  </div>
                  <div className="username">{user.displayName}</div>
                  <div className="Icon"><FiChevronDown/></div>
                </div>
              }
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar