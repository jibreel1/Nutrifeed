import { Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

import Loader from "../components/Loader";

const PlantsPage = ({ plants, isLoading }) => {
   plants.sort(function (a, b) {
      if (a.name < b.name) {
         return -1;
      }
      if (a.name > b.name) {
         return 1;
      }
      return 0;
   });

   return (
      <Box
         className="plant"
         sx={{ px: { xs: "32px", md: "54px", lg: "72px" }, mt: "100px" }}
      >
         <Box mb="60px">
            <Typography component="h3" variant="h3">
               Latest Plants
            </Typography>
            <Typography component="p" fontSize="1rem" fontWeight="300">
               Finding the right flowers for your home or garden can be very
               challenging. Not only do you have to think about seasonality, but
               you have to consider color, climate, environment, sunlight, and
               more.
            </Typography>
         </Box>
         {isLoading ? (
            <Loader />
         ) : (
            <Box
               display="flex"
               gap="50px"
               flexWrap="wrap"
               justifyContent="center"
            >
               {plants.map(plant => {
                  return (
                     <Box className="plant-card" width="300px" key={plant.id}>
                        <img
                           src={plant.image}
                           alt={plant.name}
                           loading="lazy"
                        />
                        <Box
                           display="flex"
                           justifyContent="space-between"
                           my="1em"
                        >
                           <Typography
                              component="h3"
                              variant="h3"
                              fontSize="20px"
                              width="200px"
                           >
                              {plant.name}
                           </Typography>
                           <Typography component="p" fontSize="20px">
                              ${plant.price}
                           </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                           <Typography component="p" fontSize="16px">
                              Read more...
                           </Typography>
                           <Typography component="p" fontSize="16px">
                              Buy
                           </Typography>
                        </Box>
                     </Box>
                  );
               })}
            </Box>
         )}
      </Box>
   );
};

export default PlantsPage;
