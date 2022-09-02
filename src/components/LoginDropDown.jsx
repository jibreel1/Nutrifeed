import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const LoginDropDown = ({
   links,
   showLoginLinks,
   setShowLoginLinks,
   isAuth,
   setIsAuth,
}) => {
   let navigate = useNavigate();

   const signUserOut = () => {
      signOut(auth).then(() => {
         localStorage.removeItem("isAuth");
         setIsAuth(false);
         navigate("/login");
      });
   };

   return (
      <>
         <Box
            className={`drop-down ${showLoginLinks === true ? "active" : ""}`}
         >
            {!isAuth ? (
               links.map(link => (
                  <Link
                     className="links"
                     to={link.path}
                     key={link.id}
                     onClick={() => setShowLoginLinks(false)}
                  >
                     {link.name}
                  </Link>
               ))
            ) : (
               <Box
                  onClick={() => {
                     setShowLoginLinks(false);
                     signUserOut();
                  }}
                  sx={{ cursor: "pointer" }}
               >
                  <Typography
                     component="p"
                     fontSize="16px"
                     bgcolor="#01321c"
                     p="0.5em 1em"
                     color="#fff"
                     textAlign="center"
                  >
                     Sign Out
                  </Typography>
               </Box>
            )}
         </Box>
         {/* <div
               className={`overlay ${showLoginLinks === true ? "active" : ""}`}
               onClick={toggle}
            /> */}
      </>
   );
};

export default LoginDropDown;
