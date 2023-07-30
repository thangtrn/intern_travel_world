import React, { useEffect, useRef, useState } from "react";
import { Button, Layout, Space, Typography } from "antd";
import { Link, NavLink } from "react-router-dom";
import cx from "classnames";
import { GiHamburgerMenu } from "react-icons/gi";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
   const headerRef = useRef();

   useEffect(() => {
      function stickyHeader() {
         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add("header-sticky");
         } else {
            headerRef.current.classList.remove("header-sticky");
         }
      }

      window.addEventListener("scroll", stickyHeader);

      return () => {
         window.removeEventListener("scroll", stickyHeader);
      };
   });

   return (
      <Header ref={headerRef} className="header">
         <div className="container header-wrapper">
            <Link to="/" className="header-logo">
               <img src="/images/logo.png" alt="" />
            </Link>
            <Space size={48} className="header-navigate">
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     cx("header-link", { "header-link-active": isActive })
                  }
               >
                  <Title level={3}>Home</Title>
               </NavLink>
               <NavLink
                  to="/about"
                  className={({ isActive }) =>
                     cx("header-link", { "header-link-active": isActive })
                  }
               >
                  <Title level={3}>About</Title>
               </NavLink>
               <NavLink
                  to="/tours"
                  className={({ isActive }) =>
                     cx("header-link", { "header-link-active": isActive })
                  }
               >
                  <Title level={3}>Tours</Title>
               </NavLink>
            </Space>
            <Space size={24}>
               <Space size={8}>
                  <Link to="/login" className="btn btn-secondary">
                     Login
                  </Link>
                  <Link to="/register" className="btn btn-primary">
                     Register
                  </Link>
               </Space>
               <Button type="default" className="mobile-menu">
                  <GiHamburgerMenu />
               </Button>
            </Space>
         </div>
      </Header>
   );
};

export default AppHeader;
