import React, { useContext } from "react";
import { Box } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { EastOutlined } from "@mui/icons-material";
import { WestOutlined } from "@mui/icons-material";
import PlantCard from "./PlantCard";

const LeftArrow = () => {
   const { scrollPrev } = useContext(VisibilityContext);

   return (
      <Box
         onClick={() => scrollPrev()}
         className="left-arrow"
         sx={{ display: { xs: "none", sm: "flex" } }}
      >
         <WestOutlined />
      </Box>
   );
};

const RightArrow = () => {
   const { scrollNext } = useContext(VisibilityContext);

   return (
      <Box
         onClick={() => scrollNext()}
         className="right-arrow"
         sx={{ display: { xs: "none", sm: "flex" } }}
      >
         <EastOutlined />
      </Box>
   );
};

const HorizontalScrollbar = ({ plants }) => {
   return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
         {plants.slice(0, 7).map(plant => (
            <Box key={plant.id} mx="20px" height="515px">
               <PlantCard plant={plant} />
            </Box>
         ))}
      </ScrollMenu>
   );
};

export default HorizontalScrollbar;