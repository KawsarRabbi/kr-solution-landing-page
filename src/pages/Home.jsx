import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Service/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;