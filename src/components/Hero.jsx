import { Box, Typography } from "@mui/material";
import { EastOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

import HeroImg from "../assets/nutrifeed-woman-crop2.png";

const Hero = () => {
   return (
      <Box
         className="hero"
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: { xs: "32px", md: "54px", lg: "72px" },
            pt: "40px",
         }}
      >
         <Box
            mt="30px"
            textAlign="center"
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               flexDirection: "column",
               gap: "35px",
            }}
         >
            <Typography
               variant="h1"
               color="#fff"
               fontWeight="500"
               sx={{
                  fontSize: { xs: "40px", sm: "64px" },
                  width: { md: "750px", lg: "950px" },
               }}
            >
               Plants that suits your Environment
            </Typography>
            <Typography
               variant="p"
               component="p"
               color="#fff"
               fontWeight="300"
               sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  width: { md: "750px", lg: "950px" },
                  lineHeight: "1.5",
               }}
            >
               By releasing oxygen and adding moisture to the air, plants can
               help lessen the impact of airborne allergens like dust and
               dander.
            </Typography>
            <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
               sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: "25px", sm: "45px" },
               }}
            >
               <Box
                  className="btn"
                  sx={{
                     bgcolor: "#FFC57F",
                     px: "36px",
                     py: "18px",
                     color: "#01321C",
                     fontSize: "24px",
                     fontWeight: "500",
                     cursor: "pointer",
                  }}
               >
                  <Link to="/plantsPage">Shop now</Link>
               </Box>
               <Typography
                  className="hero-explore"
                  fontSize="24px"
                  color="#fff"
                  display="flex"
                  alignItems="center"
                  gap="5px"
                  sx={{ cursor: "pointer" }}
               >
                  <Link to="/plantsPage">
                     Explore Plants <EastOutlined />
                  </Link>
               </Typography>
            </Box>
         </Box>
         <Box
            sx={{
               width: { xs: "300px", sm: "500px", md: "800px" },
               height: { xs: "270px", md: "500px" },
            }}
         >
            <img
               src={HeroImg}
               alt="hero-img"
               className="hero-img"
               loading="lazy"
            />
         </Box>
      </Box>
   );
};

export default Hero;
