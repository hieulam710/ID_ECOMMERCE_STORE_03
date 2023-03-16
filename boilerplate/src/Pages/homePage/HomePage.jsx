import "./homePage.css"
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import CategoriesComponent from "../../components/categories/CategoriesComponent";
import Feature from "../../components/feature/Feature";
import FlashSale from "../../components/flashSale/FlashSale";
import Header from "../../components/header/Header";
import Heroes from "../../components/heroes/Heroes";
import NewArrival from "../../components/newArival/NewArrival";
import TopRate from "../../components/topRate/TopRate";
// import { NavLink } from "react-router-dom";




function HomePage() {
    return (
        <>
            <div className="container">
                <Header/>
                <Heroes/>
                <CategoriesComponent/>
                <NewArrival/>
                <FlashSale/>
                <Brands/>
                <Banner/>
                <Feature/>
                <TopRate/>
            </div>
            <Footer/>
        </>);
  }
  
  export default HomePage;