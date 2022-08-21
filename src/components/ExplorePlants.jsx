import { Box, Typography, Stack } from "@mui/material";

import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";

import Plants from "../assets/nurtifeed-plant_1.png";

const ExplorePlants = () => {
   return (
      <Stack
         className="explore"
         mt="100px"
         alignItems="center"
         sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "30px", md: "60px", lg: "90px" },
            borderLeft: { xs: "5px solid #01321c", md: "none" },
         }}
      >
         <Box flex="1">
            <img
               src={Plants}
               alt="plant"
               className="explore-img"
               loading="lazy"
            />
         </Box>
         <Box flex="1.5" sx={{ textAlign: "left" }}>
            <Typography
               component="h3"
               color="#000"
               fontWeight="500"
               sx={{
                  fontSize: { xs: "32px", sm: "48px" },
                  pl: { xs: "20px", md: "0px" },
               }}
            >
               Explore our latest collections of plants
            </Typography>
            <Typography
               variant="p"
               component="p"
               color="#000"
               fontWeight="300"
               lineHeight="32.6px"
               my="20px"
               sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  pl: { xs: "20px", md: "0px" },
               }}
            >
               To be certified organic you must demonstrate the source of your
               ingredients from farm to formulation and it is a requirement of
               our certifiers that we do not use any endangered plants in our
               products and that any plants we do use are sustainably sourced.
            </Typography>
            <Box
               className="btn"
               display="flex"
               justifyContent="center"
               alignItems="center"
               gap="20px"
               sx={{
                  bgcolor: "#01321c",
                  px: "36px",
                  py: "18px",
                  color: "#fff",
                  cursor: "pointer",
                  width: { xs: "100%", sm: "305px" },
                  fontSize: { xs: "18px", sm: "24px" },
               }}
            >
               Explore more
               <Box
                  alignItems="center"
                  sx={{ display: { xs: "none", sm: "flex" } }}
               >
                  <KeyboardDoubleArrowRightOutlined />
               </Box>
            </Box>
         </Box>
      </Stack>
   );
};

export default ExplorePlants;
