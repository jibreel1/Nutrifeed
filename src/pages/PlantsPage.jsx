import { useState } from "react";
import { Box, Typography } from "@mui/material";

import PlantCard from "../components/PlantCard";

import Loader from "../components/Loader";

const PlantsPage = ({ plants, setPlants, isLoading }) => {
   // console.log(plants);
   const [searchByName, setSearchByName] = useState("");
   const [searchByScience, setSearchByScience] = useState("");

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
      <Box className="plant">
         <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ px: { xs: "32px", md: "54px", lg: "72px" } }}
            className="plant-hero"
         >
            <div className="overlay"></div>
            <Box
               color="#fff"
               zIndex="2"
               sx={{ width: { xs: "100%", lg: "900px" } }}
            >
               <Typography
                  component="h3"
                  mb=".5em"
                  sx={{ fontSize: { xs: "32px", md: "45px" } }}
               >
                  Your Favorite Plants
               </Typography>
               <Typography
                  component="p"
                  fontWeight="300"
                  mb=".5em"
                  lineHeight="2"
                  sx={{ fontSize: { xs: "18px", md: "22px" } }}
               >
                  Finding the right flowers for your home or garden can be very
                  challenging. Not only do you have to think about seasonality,
                  but you have to consider color, climate, environment,
                  sunlight, and more. Search through over 50 different types of
                  flowers including their names and pictures of each!
               </Typography>
            </Box>
         </Box>
         <Box
            bgcolor="#01321c"
            sx={{ px: { xs: "32px", md: "54px", lg: "72px" }, py: "24px" }}
         >
            <Typography
               component="h3"
               mb=".5em"
               sx={{ fontSize: { xs: "30px", md: "40px" } }}
               color="#fff"
               textAlign="center"
            >
               Search for your Favorite Plants
            </Typography>
            <div className="input">
               <input
                  className="input-child child1"
                  type="text"
                  value={searchByName}
                  placeholder="Search plants by common name..."
                  onChange={e => setSearchByName(e.target.value.toLowerCase())}
               />
               <input
                  className="input-child child2"
                  type="text"
                  value={searchByScience}
                  placeholder="Search plants by scientific name..."
                  onChange={e =>
                     setSearchByScience(e.target.value.toLowerCase())
                  }
               />
            </div>
         </Box>
         {isLoading ? (
            <Loader />
         ) : (
            <Box
               display="flex"
               gap="50px"
               flexWrap="wrap"
               justifyContent="center"
               sx={{ px: { xs: "32px", md: "54px", lg: "72px" }, mt: "32px" }}
            >
               {plants
                  .filter(plant => {
                     if (searchByName === "" && searchByScience === "") {
                        return plant;
                     } else if (
                        plant.name.toLowerCase().includes(searchByName) &&
                        plant.scientific_name
                           .toLowerCase()
                           .includes(searchByScience)
                     ) {
                        return plant;
                     } else return false;
                  })
                  .map(plant => {
                     return <PlantCard plant={plant} key={plant.id} />;
                  })}
            </Box>
         )}
      </Box>
   );
};

export default PlantsPage;
