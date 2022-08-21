import { Box, Typography } from "@mui/material";

const Methods = ({ title, subtitle, icon }) => {
   return (
      <Box
         className="method"
         display="flex"
         alignItems="center"
         flexDirection="column"
         gap="20px"
         p="20px"
      >
         <Box
            width="98px"
            height="98px"
            bgcolor="#01321c"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
         >
            {icon}
         </Box>
         <Typography variant="h5" color="#000" fontWeight="500">
            {title}
         </Typography>
         <Typography
            variant="p"
            component="p"
            color="#000"
            fontWeight="300"
            lineHeight="23px"
         >
            {subtitle}
         </Typography>
      </Box>
   );
};

export default Methods;
