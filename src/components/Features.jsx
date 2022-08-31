import { Box, Typography } from "@mui/material";
import {
   ThermostatOutlined,
   LocalFloristOutlined,
   HealthAndSafetyOutlined,
} from "@mui/icons-material";

import Methods from "./Methods";
import ExplorePlants from "./ExplorePlants";
import BrandedVase from "./BrandedVase";

const Features = () => {
   return (
      <Box
         className="features"
         mb="50px"
         sx={{
            textAlign: "center",
            px: { xs: "32px", md: "54px", lg: "72px" },
            pt: { xs: "40px", md: "80px" },
         }}
      >
         <Box mb="70px">
            <Typography
               variant="h3"
               color="#01321C"
               fontWeight="500"
               mb="16px"
               sx={{
                  fontSize: { xs: "32px", md: "48px" },
               }}
            >
               How to preserve your plants
            </Typography>
            <Typography
               variant="p"
               component="p"
               color="#000"
               fontWeight="300"
               sx={{
                  fontSize: { xs: "20px", md: "32px" },
               }}
            >
               Ways, methods and techniques
            </Typography>
         </Box>
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               gap: { xs: "40px", md: "70px" },
               flexDirection: { xs: "column", sm: "row" },
               alignItems: { xs: "center", sm: "flex-start" },
               flexWrap: { xs: "nowrap", sm: "wrap" },
            }}
         >
            <Methods
               title="Use Natural Pesticides"
               subtitle="While they may protect the plant they’re purposed for, pesticides can contaminate soil & non-target plants."
               icon={<HealthAndSafetyOutlined />}
            />
            <Methods
               title="Weather Condition"
               subtitle="While they may protect the plant they’re purposed for, pesticides can contaminate soil & non-target plants."
               icon={<ThermostatOutlined />}
            />
            <Methods
               title="Vase Container"
               subtitle="While they may protect the plant they’re purposed for, pesticides can contaminate soil & non-target plants."
               icon={<LocalFloristOutlined />}
            />
         </Box>
         <ExplorePlants />
         <BrandedVase />
      </Box>
   );
};

export default Features;
