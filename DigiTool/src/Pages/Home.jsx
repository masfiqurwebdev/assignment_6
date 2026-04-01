import Feature1 from "../Components/Feature1";
import Feature2 from "../Components/Feature2";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Products from "../Pages/Products"
import SecoundProduct from "./SecoundProduct";
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Feature1/>
      <Products/>
      <Feature2/>
      <SecoundProduct/>
      <Footer/>
    </div>
  );
};

export default Home;
