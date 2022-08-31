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
   const [cartItems, setCartItems] = useState([]);

   const plantsCollectionRef = collection(db, "plants");

   useEffect(() => {
      const getPlants = async () => {
         setLoading(true);
         const data = await getDocs(plantsCollectionRef);
         setPlants(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
         setLoading(false);
      };
      getPlants(); // eslint-disable-next-line
   }, []);

   const onAdd = plant => {
      const exist = cartItems.find(x => x.id === plant.id);
      if (exist) {
         const newCartItems = cartItems.map(x =>
            x.id === plant.id ? { ...exist, qty: exist.qty + 1 } : x
         );
         setCartItems(newCartItems);
         localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      } else {
         const newCartItems = [...cartItems, { ...plant, qty: 1 }];
         setCartItems(newCartItems);
         localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      }
   };

   const onRemove = plant => {
      const exist = cartItems.find(x => x.id === plant.id);
      if (exist.qty === 1) {
         const newCartItems = cartItems.filter(x => x.id !== plant.id);
         setCartItems(newCartItems);
         localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      } else {
         const newCartItems = cartItems.map(x =>
            x.id === plant.id ? { ...exist, qty: exist.qty - 1 } : x
         );
         setCartItems(newCartItems);
         localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      }
   };

   useEffect(() => {
      setCartItems(
         localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : []
      );
   }, []);

   return (
      <Router>
         <Wrapper />
         <Navbar
            countProducts={cartItems.length}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
         />
         <Routes>
            <Route
               path="/"
               element={
                  <Home
                     plants={plants}
                     onAdd={onAdd}
                     onRemove={onRemove}
                     cartItems={cartItems}
                  />
               }
            />
            <Route
               path="/plantsPage"
               element={
                  <PlantsPage
                     plants={plants}
                     setPlants={setPlants}
                     isLoading={loading}
                     onAdd={onAdd}
                     onRemove={onRemove}
                     cartItems={cartItems}
                  />
               }
            />
            <Route
               path="/plantsPage/:id"
               element={
                  <PlantsDetailsPage
                     plants={plants}
                     loading={loading}
                     setLoading={setLoading}
                  />
               }
            />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;
