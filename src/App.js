import { useEffect, useState, useLayoutEffect } from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   useLocation,
} from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlantsPage from "./pages/PlantsPage";
import PlantsDetailsPage from "./pages/PlantsDetailsPage";
import Footer from "./components/Footer";

import "./App.scss";

const Wrapper = ({ children }) => {
   const location = useLocation();
   useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
   }, [location.pathname]);
   return children;
};

const App = () => {
   const [plants, setPlants] = useState([]);
   const [loading, setLoading] = useState(false);
   const plantsCollectionRef = collection(db, "plants");

   // console.log(loading);

   useEffect(() => {
      const getPlants = async () => {
         setLoading(true);
         const data = await getDocs(plantsCollectionRef);
         setPlants(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
         setLoading(false);
      };
      getPlants(); // eslint-disable-next-line
   }, []);

   return (
      <Router>
         <Wrapper />
         <Navbar />
         <Routes>
            <Route path="/" element={<Home plants={plants} />} />
            <Route
               path="/plantsPage"
               element={<PlantsPage plants={plants} isLoading={loading} />}
            />
            <Route path="/plantsPage/:id" element={<PlantsDetailsPage />} />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;
