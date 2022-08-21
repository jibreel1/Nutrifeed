import { Box } from "@mui/material";
import {
   FacebookOutlined,
   Instagram,
   Twitter,
   LinkedIn,
   VolunteerActivismOutlined,
} from "@mui/icons-material";

import Logo2 from "../assets/nurtifeed-logo_green.png";
import Subscribe from "./Subscribe";

const Footer = () => {
   return (
      <Box mt="70px" className="footer">
         <Subscribe />
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               gap: "15px",
               px: { xs: "32px", md: "54px", lg: "72px" },
               pt: { xs: "30px", sm: "60px" },
               pb: "20px",
               flexDirection: { xs: "column", sm: "row" },
            }}
         >
            <img src={Logo2} alt="Logo" className="footer-img" />
            <Box
               display="flex"
               sx={{
                  gap: { xs: "20px", sm: "40px", md: "60px" },
               }}
            >
               <Instagram />
               <FacebookOutlined />
               <Twitter />
               <LinkedIn />
            </Box>
         </Box>
         <div className="footer-line"></div>
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               mb: "30px",
            }}
         >
            <p className="footer-design">
               Designed with <VolunteerActivismOutlined /> by
               <a href="#!" className="footer-designer">
                  Jibreel
               </a>
               and
               <a href="#!" className="footer-designer">
                  Bolanle
               </a>
            </p>
         </Box>
      </Box>
   );
};

export default Footer;