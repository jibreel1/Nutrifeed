import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
   return (
      <Box className="plant-card">
         <img src={plant.image} alt={plant.name} loading="lazy" />
         <Box display="flex" justifyContent="space-between" my="1em" mx="1em">
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
         <Box display="flex" justifyContent="space-between" mx="1em" pb=".5em">
            <Typography component="p" fontSize="16px">
               <Link to={`/plantsPage/${plant.id}`} state={{ id: plant.id }}>
                  Read more...
               </Link>
            </Typography>
            <Typography
               component="p"
               fontSize="16px"
               bgcolor="#01321c"
               p="0.5em 1em"
               color="#fff"
               sx={{ cursor: "pointer" }}
            >
               Buy
            </Typography>
         </Box>
      </Box>
   );
};

export default PlantCard;
