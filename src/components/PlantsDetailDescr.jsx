import { Box, Typography } from "@mui/material";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const PlantsDetailDescr = ({
   name,
   scientific,
   description,
   price,
   count,
   setCount,
}) => {
   return (
      <Box
         flex="1"
         sx={{
            px: { xs: "32px", md: "0px" },
            mt: { xs: "32px", md: "0px" },
         }}
      >
         <Typography
            bgcolor="#01321c"
            component="p"
            fontWeight="bold"
            textTransform="uppercase"
            color="#ffc57f"
            fontSize="14px"
            letterSpacing="1.2px"
            p="7px 15px"
            display="inline-block"
         >
            Flowers
         </Typography>
         <Typography
            component="h2"
            fontWeight="700"
            textTransform="capitalize"
            letterSpacing="1.1px"
            sx={{
               fontSize: { xs: "24px", sm: "34px" },
               pt: { xs: "10px", md: "20px" },
            }}
         >
            {name}
         </Typography>
         <Typography
            bgcolor="#01321c"
            component="p"
            fontWeight="bold"
            textTransform="uppercase"
            color="#ffc57f"
            fontSize="14px"
            letterSpacing="1.2px"
            p="7px 15px"
            display="inline-block"
            sx={{ mb: { xs: "25px" } }}
         >
            {scientific}
         </Typography>
         <Typography component="p" letterSpacing="1px" lineHeight="1.6">
            {description}
         </Typography>
         <Typography
            component="h2"
            fontWeight="700"
            letterSpacing="1px"
            sx={{
               fontSize: "24px",
               display: "flex",
               alignItems: "center",
               gap: "20px",
               my: "20px",
            }}
         >
            ${price}.00
         </Typography>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="25px"
            sx={{ flexDirection: { xs: "column", lg: "row" } }}
         >
            <Box
               flex="1"
               display="flex"
               alignItems="center"
               justifyContent="space-between"
               p="10px 20px"
               bgcolor="hsl(223, 64%, 98%)"
               borderRadius="10px"
               sx={{ width: { xs: "100%", sm: "450px", md: "100%" } }}
            >
               <Box
                  className="math"
                  onClick={() => {
                     count > 0 && setCount(count - 1);
                  }}
               >
                  <RemoveOutlined />
               </Box>
               <Typography
                  fontWeight="700"
                  color="hsl(220, 13%, 13%)"
                  fontSize="20px"
               >
                  {count}
               </Typography>
               <Box
                  className="math"
                  onClick={() => {
                     setCount(count + 1);
                  }}
               >
                  <AddOutlined />
               </Box>
            </Box>
            <Box
               flex="2"
               display="flex"
               alignItems="center"
               justifyContent="center"
               bgcolor="#01321c"
               borderRadius="10px"
               p="20px"
               gap="20px"
               boxShadow="0 30px 30px hsla(153, 96%, 10%, 0.5)"
               sx={{
                  cursor: "pointer",
                  width: { xs: "100%", sm: "450px", md: "100%" },
               }}
               // onClick={() => handleAddCart()}
            >
               <ShoppingCartOutlined sx={{ color: "#fff" }} />
               <Typography
                  color="#fff"
                  fontWeight="700"
                  letterSpacing="1.2px"
                  fontSize="18px"
               >
                  Add to Cart
               </Typography>
            </Box>
         </Box>
      </Box>
   );
};

export default PlantsDetailDescr;
