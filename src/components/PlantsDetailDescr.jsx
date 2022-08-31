import { Box, Typography } from "@mui/material";

const PlantsDetailDescr = ({ name, scientific, description, price }) => {
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
      </Box>
   );
};

export default PlantsDetailDescr;
