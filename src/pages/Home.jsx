import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Plants from "../components/Plants";
import Order from "../components/Order";

const Home = ({ plants }) => {
   return (
      <div>
         <Hero />
         <Features />
         <About />
         <Plants plants={plants} />
         <Order />
      </div>
   );
};

export default Home;
