import React from "react";
import { LayoutStyles } from "./LayoutStyles";
import Logo from "../assets/images/Logo";
import {Link, Outlet} from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <LayoutStyles>
      <header>
        <div className="container">
          <Link to="/">
            <Logo/>
          </Link>
        </div>
      </header>
      <div className="banner">
        <img src={require("../assets/images/Banner.jpg")} alt="Banner"/>
      </div>
      <div className="childrenWrapper">
        <Outlet />
      </div>
      <footer>
        <Link to="/">
          <Logo/>
        </Link>
        <p>&copy;Warner Developers Programs 2022. All right reserved</p>
      </footer>
    </LayoutStyles>
  );
}

export default Layout;
