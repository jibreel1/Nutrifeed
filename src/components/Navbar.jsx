import { useState } from "react";

import { Box } from "@mui/material";
import {
   PersonOutlineOutlined,
   SearchOutlined,
   ShoppingCartOutlined,
   MenuOutlined,
} from "@mui/icons-material";
import Logo from "../assets/nurtifeed-logo.png";

import Sidebar from "./Sidebar";

const Navbar = () => {
   const [showMenubar, setShowMenubar] = useState(false);

   const links = [
      {
         id: "1",
         name: "Home",
         path: "/",
      },
      {
         id: "2",
         name: "About",
         path: "#about",
      },
      {
         id: "3",
         name: "Plants",
         path: "#plant",
      },
      {
         id: "4",
         name: "Contacts",
         path: "#contact",
      },
   ];

   const ToggleSidebar = () => {
      showMenubar === true ? setShowMenubar(false) : setShowMenubar(true);
   };

   return (
      <Box
         component="nav"
         className="navbar"
         sx={{ px: { xs: "32px", md: "54px", lg: "72px" }, pt: "40px" }}
      >
         <Box
            className="navbar_img"
            sx={{ width: { xs: "120px", md: "170px" } }}
         >
            <img src={Logo} alt="logo" className="logo" />
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
               <li key={link.id}>
                  <a href={link.path}>{link.name}</a>
               </li>
            ))}
         </Box>
         <Box
            className="navbar_icons"
            sx={{
               display: "flex",
               gap: "18px",
               color: "#fff",
            }}
         >
            <SearchOutlined sx={{ display: { xs: "none", sm: "block" } }} />
            <PersonOutlineOutlined cursor="pointer" />
            <ShoppingCartOutlined cursor="pointer" />
            <MenuOutlined
               sx={{ display: { xs: "block", sm: "none" }, cursor: "pointer" }}
               onClick={() => {
                  setShowMenubar(!showMenubar);
               }}
            />
         </Box>
         <Sidebar toggle={ToggleSidebar} links={links} showMenu={showMenubar} />
      </Box>
   );
};

export default Navbar;
