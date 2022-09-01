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
            component="span"
            color="hsl(219, 9%, 45%)"
            fontWeight="400"
            fontSize="16px"
         >
            Scientific Name:
         </Typography>
         <Typography
            // bgcolor="#01321c"
            component="p"
            fontWeight="bold"
            textTransform="uppercase"
            color="#000"
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
         <Box display="flex" alignItems="center" gap="15px" my="20px">
            <Typography
               // component="span"
               color="hsl(219, 9%, 45%)"
               fontWeight="400"
               fontSize="16px"
            >
               Price:
            </Typography>
            <Typography
               component="h2"
               fontWeight="700"
               letterSpacing="1px"
               sx={{
                  fontSize: "24px",
               }}
            >
               ${price}.00
            </Typography>
         </Box>
      </Box>
   );
};

export default PlantsDetailDescr;
