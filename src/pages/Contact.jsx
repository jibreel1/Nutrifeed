import { Box, Typography } from "@mui/material";
import { EngineeringOutlined } from "@mui/icons-material";

const Contact = () => {
   return (
      <Box
         height="200px"
         display="flex"
         alignItems="center"
         justifyContent="center"
         flexDirection="column"
         textAlign="center"
         mx="20px"
      >
         <EngineeringOutlined fontSize="large" />
         <Typography
            component="h3"
            sx={{ fontSize: { xs: "28px", sm: "40px" } }}
         >
            This Page is Under Construction
         </Typography>
      </Box>
   );
};

export default Contact;
