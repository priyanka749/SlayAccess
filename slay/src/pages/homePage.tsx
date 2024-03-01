import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../css/homePage.css";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import HomePageSearch from "./homePageSearch.tsx";

const HomePage = () => {

    const [search,setSearch] = useState(null);

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    // Fetching data from API
    const { data: menuData } = useQuery({
        queryKey: ["GET_ITEMMENU_DATA"],
        queryFn() {
            return axios.get("http://localhost:8080/item/findAll");
        }
    });

    // Searching data
    const filteredItemData = menuData?.data.filter((item) =>
        item?.itemName?.toLowerCase().includes(search?.toLowerCase())
    );

    return(
        <>
            <div className={"home-page"}>
                <div className={"hp-first-div"}>
                    <HomeNavbar activePage={currentLocation} />
                    <div className={"hp-main-container"}>
                       
                        <div className={"hp-search-wrapper"}>
                            <input type={"search"} placeholder={"Search your fav product."} onChange={(e)=> setSearch(e.target.value)}/>
                            <span><FaSearch/></span>
                        </div>
                    </div>
                </div>

                <div className={"hp-second-div"}>
                    {search && <div className={"line2"}></div> &&  <div className={"home-search-div"}>
                        <HomePageSearch filteredItemData={filteredItemData}/>
                    </div>}
                    
                        <h2 className={"recommended-text"}></h2>
                        {/* <ImageSlider/> */}
                        {/* <div className={"view-more-btn"}>
                            <Link to={"/OurMenu"}><button>Our Collection </button></Link>
                        </div> */}
            

                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}

export default HomePage