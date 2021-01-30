import React  from 'react'

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faFolderOpen,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";


const UserSideNav = ({isSideBarOpen}) => {
    const history = useHistory()
    
    
    return (
      <div>
        {/* side bar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
            isSideBarOpen
              ? "ease-out translate-x-0"
              : "ease-in -translate-x-full"
          }`}
        >
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId={"/user/profile/edit-account"}
            onSelect={({ itemId }) => {
              // maybe push to the route
              history.push(itemId);
            }}
            items={[
              {
                title: "Profile",
                itemId: "/profile",
                elemBefore: () => <FontAwesomeIcon icon={faUser} />,
                subNav: [
                  {
                    title: "change password",
                    itemId: "/user/profile/change-password",
                  },
                  {
                    title: "edit account",
                    itemId: "/user/profile/edit-account",
                  },
                ],
              },
              {
                title: "Issued Books",
                itemId: "/user/issued-books",
                elemBefore: () => <FontAwesomeIcon icon={faFolderOpen} />,
              },
              {
                title: "Log Out",
                itemId: "/another",
                elemBefore: () => <FontAwesomeIcon icon={faSignOutAlt} />,
              },
            ]}
          />
        </div>
      </div>
    );
}

export default UserSideNav
