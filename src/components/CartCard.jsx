import { Box, Typography } from "@mui/material";
import AddCart from "./AddCart";
import { CloseOutlined } from "@mui/icons-material";

const CartCard = ({ cartItems, onAdd, onRemove, showCart, toggle }) => {
   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
   return (
      <>
         <Box
            className={`cart ${showCart === true ? "active" : ""}`}
            sx={{
               width: { xs: "100%", sm: "400px" },
               borderRadius: "10px",
            }}
         >
            <div>
               <Typography fontWeight="700" pt="25px" pl="25px" pb="25px">
                  Cart
               </Typography>
               <div className="close" onClick={toggle}>
                  <CloseOutlined />
               </div>
            </div>
            <Box
               sx={{
                  borderTop: "1px solid hsl(220, 14%, 75%)",
               }}
            >
               {cartItems.length === 0 && (
                  <Typography
                     display="flex"
                     justifyContent="center"
                     fontWeight="700"
                     color="hsl(219, 9%, 45%)"
                     my="50px"
                  >
                     Your cart is empty
                  </Typography>
               )}
               {cartItems.map(plant => (
                  <AddCart
                     key={plant.id}
                     plant={plant}
                     onAdd={onAdd}
                     onRemove={onRemove}
                  />
               ))}
               {cartItems.length !== 0 && (
                  <Box
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                     m="20px"
                  >
                     <Typography
                        color="#fff"
                        p="10px 20px"
                        bgcolor="#01321c"
                        fontWeight="700"
                        letterSpacing="1.2px"
                        fontSize="18px"
                        sx={{ cursor: "pointer" }}
                     >
                        Checkout
                     </Typography>
                     <Typography
                        component="h4"
                        fontWeight="700"
                        fontSize="20px"
                     >
                        <Typography
                           component="span"
                           display="block"
                           color="hsl(219, 9%, 45%)"
                           fontWeight="400"
                           fontSize="16px"
                           textAlign="center"
                        >
                           Total
                        </Typography>
                        ${itemsPrice.toFixed(2)}
                     </Typography>
                  </Box>
               )}
            </Box>
         </Box>
         <div
            className={`overlay ${showCart === true ? "active" : ""}`}
            onClick={toggle}
         />
      </>
   );
};

export default CartCard;
