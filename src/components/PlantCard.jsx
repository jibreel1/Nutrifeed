import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
   return (
      <Box className="plant-card" width="300px" key={plant.id}>
         <img src={plant.image} alt={plant.name} loading="lazy" />
         <Box display="flex" justifyContent="space-between" my="1em">
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
               <Link to={`/plantsPage/${plant.id}`}>Read more...</Link>
            </Typography>
            <Typography component="p" fontSize="16px">
               Buy
            </Typography>
         </Box>
      </Box>
   );
};

export default PlantCard;
