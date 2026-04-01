import Feature1 from "../Components/Feature1";
import Feature2 from "../Components/Feature2";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Products from "../Pages/Products"
import SecoundProduct from "./SecoundProduct";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Feature1/>
      <Products/>
      <Feature2/>
      <SecoundProduct/>
    </div>
  );
};

export default Home;
