import { Box, Typography } from "@mui/material";

import {
   LocalShippingOutlined,
   LocationOnOutlined,
   ShoppingCartOutlined,
   LocalFloristOutlined,
} from "@mui/icons-material";

const OrderItem = ({ icon, title }) => {
   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         flexDirection="column"
      >
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#D9D9D9"
            borderRadius="50%"
            mb="18px"
            sx={{
               width: { xs: "120px", md: "175px" },
               height: { xs: "120px", md: "175px" },
            }}
         >
            {icon}
         </Box>
         <Typography
            variant="p"
            component="p"
            color="#000"
            fontWeight="300"
            sx={{
               fontSize: { xs: "20px", md: "24px" },
            }}
         >
            {title}
         </Typography>
      </Box>
   );
};

const Order = () => {
   return (
      <Box
         mt="100px"
         mb="70px"
         sx={{
            textAlign: "center",
            px: { xs: "32px", md: "54px", lg: "72px" },
         }}
      >
         <Typography
            variant="h3"
            color="#000"
            fontWeight="500"
            sx={{
               fontSize: { xs: "40px", sm: "56px" },
            }}
         >
            How to order ?
         </Typography>
         <Box
            className="order"
            mt="70px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
               gap: { xs: "50px", md: "90px" },
            }}
            flexWrap="wrap"
         >
            <OrderItem title="Choose Plant" icon={<LocalFloristOutlined />} />
            <OrderItem title="Make Order" icon={<ShoppingCartOutlined />} />
            <OrderItem title="Choose Location" icon={<LocationOnOutlined />} />
            <OrderItem title="Receive Order" icon={<LocalShippingOutlined />} />
         </Box>
      </Box>
   );
};

export default Order;
