import { Box } from "@mui/material";

import Logo2 from "../assets/nurtifeed-logo_green.png";

const About = () => {
   return (
      <div className="about">
         <img src={Logo2} alt="logo" />
         <Box
            className="btn"
            sx={{
               bgcolor: "#FFC57F",
               px: "36px",
               py: "18px",
               color: "#01321C",
               fontSize: "24px",
               fontWeight: "500",
               // borderRadius: "16px",
               cursor: "pointer",
            }}
         >
            About Nutrifeed
         </Box>
      </div>
   );
};

export default About;
