import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
