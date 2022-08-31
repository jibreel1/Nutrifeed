import { Box, Typography } from "@mui/material";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";

const AddCart = ({ plant, onAdd, onRemove }) => {
   return (
      <Box
         key={plant.id}
         p="15px"
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         gap="10px"
         borderBottom="1px solid hsl(220, 14%, 75%)"
      >
         <img src={plant.image} alt="img1" className="thumbnail" />
         <Box width="150px" display="flex" flexDirection="column" gap="7px">
            <Typography
               color="hsl(219, 9%, 45%)"
               fontWeight="400"
               fontSize="16px"
               textAlign="center"
            >
               {plant.name}
            </Typography>
            <Box
               display="flex"
               alignItems="center"
               justifyContent="center"
               p="5px 10px"
               bgcolor="hsl(223, 64%, 98%)"
               borderRadius="10px"
               height="40px"
               width="100%"
               gap="15px"
            >
               <Box
                  className="math"
                  onClick={() => {
                     onRemove(plant);
                  }}
               >
                  <RemoveOutlined />
               </Box>
               <Box
                  className="math"
                  onClick={() => {
                     onAdd(plant);
                  }}
               >
                  <AddOutlined />
               </Box>
            </Box>
         </Box>
         <div>
            {plant.qty} x ${plant.price.toFixed(2)}
         </div>
      </Box>
   );
};

export default AddCart;
