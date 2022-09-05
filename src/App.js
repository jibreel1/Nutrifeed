import { useEffect, useState, useLayoutEffect } from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   useLocation,
} from "react-router-dom";

// import { Backdrop } from "@mui/material";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlantsPage from "./pages/PlantsPage";
import PlantsDetailsPage from "./pages/PlantsDetailsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
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
   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
   // const [open, setOpen] = useState(false);
   // const [isAuth, setIsAuth] = useState(false);

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

   // const handleToggle = () => {
   //    setOpen(!open);
   // };
   // if (!isAuth) {
   //    <Backdrop
   //       sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
   //       open={open}
   //       onClick={handleToggle}
   //    >
   //       <div>Please Login</div>
   //    </Backdrop>;
   // }

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
            isAuth={isAuth}
            setIsAuth={setIsAuth}
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;
