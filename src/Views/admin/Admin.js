import React from 'react'
import { connect } from 'react-redux'
import Menu from './AdminSideMenu'
import ChangePassword from './pages/AdminChangePassword'

// import Header from './Header'
import { Route } from 'react-router-dom'
import AddUser from './pages/AddUser'
import AddLibrarian from "./pages/AddLibrarian";
import AddBook from './pages/AddBook'
import AddDigitalBooks from './pages/AddDigitalBooks'
import IssueBook from './pages/IssueBook'
import UserListPage from "./pages/UserListPage";
import LibrarianListPage from './pages/LibrarianListPage'
import ViewIssuedBooks from './pages/ViewIssuedBooks'
import EditAccount from './pages/AdminEditAccount';

const Admin = ({ match }) => {
  // const [ sideMenudrop, isSideMenuDrop ] = useState(false)
  
 
  return (
    <div>
      <h1 className="text-center ">Menu</h1>
      <div className="md:flex">
        <Menu className="w-2/3 sideMenuDrop" />

        <div className="w-full">
          <Route
            path={`${match.url}/profile/change-password`}
            component={ChangePassword}
          />
          <Route
            path={`${match.url}/profile/edit-account`}
            component={EditAccount}
          />
          <Route path={`${match.url}/add-user`} component={AddUser} />
          <Route path={`${match.url}/add-librarian`} component={AddLibrarian} />
          <Route path={`${match.url}/add-book`} component={AddBook} />
          <Route
            path={`${match.url}/add-digitalbook`}
            component={AddDigitalBooks}
          />
          <Route path={`${match.url}/issue-book`} component={IssueBook} />
          <Route path={`${match.url}/all-users`} component={UserListPage} />
          <Route
            path={`${match.url}/all-librarians`}
            component={LibrarianListPage}
          />
          <Route
            path={`${match.url}/view-all-issued-books`}
            component={ViewIssuedBooks}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    auth : state.auth
  }
}


export default connect(mapStateToProps)(Admin);
