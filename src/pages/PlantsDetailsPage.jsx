import { useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useLocation } from "react-router-dom";
import PlantsDetailDescr from "../components/PlantsDetailDescr";
import Plants from "../components/Plants";

const PlantsDetailsPage = ({ setLoading, loading, count, setCount }) => {
   const [plantDetails, setPlantDetails] = useState({});
   const location = useLocation();
   const plantsCollectionDetailsRef = doc(db, "plants", location.state.id);

   useEffect(() => {
      const getPlantDetail = async () => {
         // setLoading(true);
         const docSnap = await getDoc(plantsCollectionDetailsRef);
         setPlantDetails(docSnap.data());
         // setLoading(false);
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
               count={count}
               setCount={setCount}
            />
         </Stack>
         {/* <Plants title="View more..." /> */}
      </>
   );
};

export default PlantsDetailsPage;
