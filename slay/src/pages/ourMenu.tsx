import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ourMenu.css";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import MenuCard from "./menuPage/menuCard.tsx";
import Navbar from "./menuPage/menuNavbar.tsx";

interface MenuItem {
    category: {
        name: string;
    };
}

const OurMenu: React.FC = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    const { data: Menu2 } = useQuery({
        queryKey: ["GET_ITEM_DATA"],
        queryFn() {
            return axios.get<MenuItem[]>("http://localhost:8080/item/findAll");
        },
    });

    const [menuData, setMenuData] = useState<MenuItem[]>([]);
    const [menuList, setMenuList] = useState<string[]>([]);

    useEffect(() => {
        if (Menu2?.data) {
            setMenuData(Menu2.data);

            const uniqueCategories = [
                ...new Set(
                    Menu2.data.map((curElem) => curElem?.category?.name || "Uncategorized")
                ),
                "All",
            ];
            setMenuList(uniqueCategories);
        }
    }, [Menu2?.data]);

    const filterItem = (category: string) => {
        if (category === "All") {
            setMenuData(Menu2?.data || []);
            return;
        }

        const updatedList = Menu2?.data?.filter((curElem) => {
            return curElem?.category?.name === category;
        }) || [];

        setMenuData(updatedList);
    };

    return (
        <>
            <div className={"menu-page-div"}>
                <HomeNavbar activePage={currentLocation} />
                <div className={"check-out-container"}>
                    {/* <h2>Check out our</h2>
                    <h1>MENU</h1> */}
                </div>

                <div className={"menu-contents"}>
                    <Navbar filterItem={filterItem} menuList={menuList} />
                    <MenuCard menuData={menuData} />
                </div>
            </div>
        </>
    );
};

export default OurMenu;