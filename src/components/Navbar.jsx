import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase-config";

import { Avatar, Box, Typography } from "@mui/material";
import {
   PersonOutlineOutlined,
   SearchOutlined,
   ShoppingCartOutlined,
   MenuOutlined,
} from "@mui/icons-material";
import Logo from "../assets/nurtifeed-logo.png";

import Sidebar from "./Sidebar";
import CartCard from "./CartCard";
import LoginDropDown from "./LoginDropDown";

const Navbar = ({
   countProducts,
   cartItems,
   onAdd,
   onRemove,
   isAuth,
   setIsAuth,
}) => {
   const [showMenubar, setShowMenubar] = useState(false);
   const [showCart, setShowCart] = useState(false);
   const [showLoginLinks, setShowLoginLinks] = useState(false);
   const location = useLocation();

   const links = [
      {
         id: "1",
         name: "Home",
         path: "/",
      },
      {
         id: "2",
         name: "About",
         path: "/about",
      },
      {
         id: "3",
         name: "Plants",
         path: "/plantsPage",
      },
      {
         id: "4",
         name: "Contacts",
         path: "/contact",
      },
   ];

   const loginLinks = [
      {
         id: "1",
         name: "Sign Up",
         path: "#!",
      },
      {
         id: "2",
         name: "Login",
         path: "/login",
      },
      {
         id: "3",
         name: "Help Center",
         path: "#!",
      },
   ];

   const toggleSidebar = () => {
      showMenubar === true ? setShowMenubar(false) : setShowMenubar(true);
   };

   const toggleCart = () => {
      showCart === true ? setShowCart(false) : setShowCart(true);
   };

   return (
      <Box
         component="nav"
         className="navbar"
         sx={{
            px: { xs: "20px", sm: "32px", md: "54px", lg: "72px" },
            py: "25px",
         }}
      >
         <Box
            className="navbar_img"
            sx={{ width: { xs: "120px", md: "170px" } }}
         >
            <img src={Logo} alt="logo" className="logo" loading="lazy" />
         </Box>
         <Box
            component="ul"
            className="navbar_links"
            sx={{
               display: { xs: "none", sm: "flex" },
               gap: { sm: "25px", lg: "45px" },
               color: "#fff",
               fontSize: { sm: "16px", md: "20px" },
            }}
         >
            {links.map(link => (
               <li
                  key={link.id}
                  className={location.pathname === link.path ? "active" : ""}
               >
                  <Link to={link.path}>{link.name}</Link>
               </li>
            ))}
         </Box>
         <Box
            className="navbar_icons"
            sx={{
               display: "flex",
               alignItems: "center",
               gap: { xs: "10px", sm: "18px" },
               color: "#fff",
            }}
         >
            <SearchOutlined sx={{ display: { xs: "none", sm: "block" } }} />
            <Box
               position="relative"
               onClick={() => {
                  setShowLoginLinks(!showLoginLinks);
                  setShowMenubar(false);
                  setShowCart(false);
               }}
            >
               {!isAuth ? (
                  <PersonOutlineOutlined cursor="pointer" />
               ) : (
                  <Avatar
                     src={auth?.currentUser?.photoURL}
                     referrerPolicy="no-referrer"
                     alt="profile-pic"
                     sx={{ width: 26, height: 26, cursor: "pointer" }}
                  />
               )}
            </Box>
            <Box
               position="relative"
               onClick={() => {
                  setShowCart(!showCart);
                  setShowMenubar(false);
                  setShowLoginLinks(false);
               }}
            >
               {countProducts ? (
                  <Box
                     position="absolute"
                     color="#fff"
                     bgcolor="hsl(26, 100%, 55%)"
                     borderRadius="10px"
                     p="0 4px"
                     top="-7px"
                     right="0"
                  >
                     <Typography fontSize="12px">{countProducts}</Typography>
                  </Box>
               ) : (
                  ""
               )}
               <ShoppingCartOutlined cursor="pointer" />
            </Box>
            <MenuOutlined
               sx={{ display: { xs: "block", sm: "none" }, cursor: "pointer" }}
               onClick={() => {
                  setShowMenubar(!showMenubar);
                  setShowCart(false);
                  setShowLoginLinks(false);
               }}
            />
         </Box>
         <Sidebar toggle={toggleSidebar} links={links} showMenu={showMenubar} />
         <CartCard
            toggle={toggleCart}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            showCart={showCart}
         />
         <LoginDropDown
            links={loginLinks}
            showLoginLinks={showLoginLinks}
            setShowLoginLinks={setShowLoginLinks}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
         />
      </Box>
   );
};

export default Navbar;
