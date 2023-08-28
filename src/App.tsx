import { Routes, Route } from "react-router-dom";

import MainLayout from "./pages/layouts/MainLayout/MainLayout";

import Home from "./pages/pages/Home/Home";
import Basket from "./pages/pages/Basket/Basket";
import ItemDesc from "./pages/pages/ItemDescriptionFullPage/ItemDesc";

import NotFound from "./pages/pages/NotFound/NotFound";

import "./css/normalize.css";
import "./css/main.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="FoodShop/" element={<Home />} />
                <Route path="basket" element={<Basket />} />
                <Route path="foods/:id" element={<ItemDesc />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    );
}
