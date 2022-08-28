import { ChevronRightOutlined } from "@mui/icons-material";

import { Box, Typography } from "@mui/material";

const Subscribe = () => {
   return (
      <Box
         bgcolor="#01321c"
         display="flex"
         justifyContent="center"
         alignItems="center"
         flexDirection="column"
         sx={{
            textAlign: "center",
            px: { xs: "32px", md: "54px", lg: "72px" },
            py: { xs: "30px", sm: "60px", lg: "90px" },
         }}
      >
         <div>
            <Typography
               variant="h3"
               color="#fff"
               fontWeight="500"
               mb=".4em"
               sx={{
                  fontSize: { xs: "40px", sm: "56px" },
               }}
            >
               Subscribe and get discount from us
            </Typography>
            <Typography
               variant="p"
               component="p"
               color="#fff"
               fontWeight="300"
               sx={{
                  fontSize: { xs: "20px", md: "24px" },
               }}
            >
               ...free discount for you after subscribing
            </Typography>
         </div>
         <Box className="input" mt="50px">
            <input
               type="email"
               className="input-child item"
               placeholder="...your email address"
            />
            <button type="submit" className="input-btn btn">
               Subscribe Now
               <ChevronRightOutlined />
            </button>
         </Box>
      </Box>
   );
};

export default Subscribe;
