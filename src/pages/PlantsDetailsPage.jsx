import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useLocation } from "react-router-dom";
import PlantsDetailDescr from "../components/PlantsDetailDescr";
import Loader from "../components/Loader";
import HorizontalScrollbar from "../components/HorizontalScrollBar";

const PlantsDetailsPage = ({ plants, setLoading, loading }) => {
   const [plantDetails, setPlantDetails] = useState({});
   const location = useLocation();
   const plantsCollectionDetailsRef = doc(db, "plants", location.state.id);

   useEffect(() => {
      const getPlantDetail = async () => {
         setLoading(true);
         const docSnap = await getDoc(plantsCollectionDetailsRef);
         setPlantDetails(docSnap.data());
         setLoading(false);
      };
      getPlantDetail(); // eslint-disable-next-line
   }, []);

   const { description, name, image, price, scientific_name } = plantDetails;

   return (
      <>
         <Stack
            className="plantDetails"
            sx={{
               display: { xs: "block", sm: "flex" },
               alignItems: "center",
               flexDirection: { xs: "column", md: "row" },
               gap: { xs: "30px" },
               px: { md: "54px", lg: "72px" },
            }}
         >
            {loading ? (
               <Loader />
            ) : (
               <>
                  <Box
                     flex="1"
                     dislay="flex"
                     justifyContent="center"
                     alignItems="center"
                  >
                     <img
                        src={image}
                        alt={name}
                        className="plantDetails-img"
                        loading="lazy"
                     />
                  </Box>
                  <PlantsDetailDescr
                     name={name}
                     description={description}
                     scientific={scientific_name}
                     price={price}
                  />
               </>
            )}
         </Stack>
         <Box mt="50px" mb="20px">
            <Typography
               component="h3"
               mb="25px"
               sx={{
                  fontSize: { xs: "28px", md: "38px", lg: "48px" },
                  px: { xs: "32px", md: "54px", lg: "72px" },
               }}
            >
               Check out more plants...
            </Typography>
            <HorizontalScrollbar plants={plants} />
         </Box>
      </>
   );
};

export default PlantsDetailsPage;
