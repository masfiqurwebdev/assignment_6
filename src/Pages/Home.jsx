import Banner from "../Components/Banner"
import CtaSection from "../Components/CtaSection"
import Feature from "../Components/Feature"
import Hero from "../Components/Hero"
import Packages from "../Components/Packages"
import ProductsPage from "../Components/Products"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <ProductsPage/>
      <Feature/>
      <Packages/>
      <CtaSection/>
    </div>
  )
}

export default Home
