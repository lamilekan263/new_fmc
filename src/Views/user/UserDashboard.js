import React from 'react'

import { Route } from 'react-router-dom'
import SideNav from './UserSideNav'

import Dashboard from './pages/Dashboard'
import ChangePassword from './pages/ChangePassword'
import EditAccount from './pages/EditAccount'
import BookRequest from './pages/BookRequest'
import IssuedBooks from './pages/IssuedBooks'

const UserDashboard = (props) => {
//  const [ isSideBarOpen, setIsSideBarOpen] =useState(false)
    return (
      <div >
       
        <div className="md:flex">
        {/* <div className={` inset-0  block transition-opacity    ${
          isSideBarOpen ? "hidden" : "block"
        }`}> */}
        <div>
        <SideNav className="w-2/3 " />
        
        </div>
      
          <div className="w-full">
           <Route path={`${props.match.url}/user-dashboard`} component={Dashboard} />
        <Route
          path={`${props.match.url}/profile/change-password`}
          component={ChangePassword}
        />
        <Route path={`${props.match.url}/profile/edit-account`} component={EditAccount} />
        <Route path={`${props.match.url}/request-book`} component={BookRequest} />
        <Route path={`${props.match.url}/issued-books`} component={IssuedBooks} /></div>
          
        </div>
      </div>
    );
}

export default UserDashboard
