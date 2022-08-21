import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Order from "./components/Order";
import Footer from "./components/Footer";

import "./App.scss";

const App = () => {
   return (
      <Box>
         <Navbar />
         <Hero />
         <Features />
         <About />
         <Order />
         <Footer />
      </Box>
   );
};

export default App;
