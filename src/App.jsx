import Navbar from "./components/nav_bar/navbar.jsx";
import './App.css'
import HomeBody from "./components/home_body/homebody.jsx";
import AboutUs from "./components/about_us/about_us.jsx";
import ContactUs from "./components/contact_us/contact_us.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <HomeBody/>
            <AboutUs/>
            <ContactUs/>
        </>
    )
}

export default App
