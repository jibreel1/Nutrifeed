import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import HorizontalScrollbar from "./HorizontalScrollBar";

const Plants = ({ plants }) => {
   const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
   };
   shuffleArray(plants);

   return (
      <Box className="plant" sx={{ mt: "100px" }}>
         <Box
            justifyContent="space-between"
            alignItems="center"
            mb="60px"
            sx={{
               display: { xs: "block", md: "flex" },
               px: { xs: "32px", md: "54px", lg: "72px" },
            }}
         >
            <Typography
               component="h3"
               sx={{ fontSize: { xs: "28px", md: "38px", lg: "48px" } }}
            >
               Latest Plants
            </Typography>
            <Typography
               component="p"
               sx={{
                  textAlign: { xs: "left", sm: "right" },
                  fontSize: { xs: "20px", md: "24px" },
               }}
            >
               <Link to="/plantsPage">Explore More</Link>
            </Typography>
         </Box>
         <HorizontalScrollbar plants={plants} />
      </Box>
   );
};

export default Plants;
