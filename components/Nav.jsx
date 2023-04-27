import { useEffect, useState } from "react";
import AuthModal from "./AuthModal";

const Nav = ({ authToken }) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleClick = () => {
    console.log("click");
    setOpenAuthModal(true);

    console.log(openAuthModal);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          My Blog
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            
              <a className="waves-effect waves-light btn" onClick={handleClick}>
                <i className="material-icons right">{!authToken ? 'login' : 'logout'}</i>{!authToken ? 'Log In' : 'Log Out'}
              </a>
          
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
