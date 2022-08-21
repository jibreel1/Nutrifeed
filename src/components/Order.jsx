import { Box, Typography } from "@mui/material";

import {
   LocalShippingOutlined,
   LocationOnOutlined,
   ShoppingCartOutlined,
   LocalFloristOutlined,
} from "@mui/icons-material";

const OrderItem = ({ icon, title }) => {
   return (
      <div>
         <Box
            width="175px"
            height="175px"
            bgcolor="#D9D9D9"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb="18px"
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
      </div>
   );
};

const Order = () => {
   return (
      <Box
         mt="100px"
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
            gap="90px"
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
