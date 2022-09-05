import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";

const PlantCard = ({ plant, onAdd, onRemove, item }) => {
   return (
      <Box className="plant-card">
         <img src={plant.image} alt={plant.name} loading="lazy" />
         <Box display="flex" justifyContent="space-between" my="1em" mx="1em">
            <Typography
               component="h3"
               variant="h3"
               fontSize="20px"
               maxWidth="150px"
            >
               {plant.name}
            </Typography>
            <Typography component="p" fontSize="16px">
               <Link to={`/plantsPage/${plant.id}`} state={{ id: plant.id }}>
                  Read more
               </Link>
            </Typography>
         </Box>
         <Box display="flex" justifyContent="space-between" mx="1em" pb=".5em">
            <Typography component="p" fontSize="20px">
               ${plant.price}
            </Typography>
            {item ? (
               <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p="10px 20px"
                  bgcolor="hsl(223, 64%, 98%)"
                  borderRadius="10px"
                  height="50px"
                  gap="15px"
               >
                  <Box
                     className="math"
                     onClick={() => {
                        onRemove(item);
                     }}
                  >
                     <RemoveOutlined />
                  </Box>
                  <Typography
                     fontWeight="700"
                     color="hsl(220, 13%, 13%)"
                     fontSize="20px"
                  >
                     {item.qty}
                  </Typography>
                  <Box
                     className="math"
                     onClick={() => {
                        onAdd(item);
                     }}
                  >
                     <AddOutlined />
                  </Box>
               </Box>
            ) : (
               <Typography
                  component="p"
                  fontSize="16px"
                  bgcolor="#01321c"
                  p="0.5em 1em"
                  color="#fff"
                  sx={{ cursor: "pointer" }}
                  onClick={() => onAdd(plant)}
               >
                  Add to Cart
               </Typography>
            )}
         </Box>
      </Box>
   );
};

export default PlantCard;
