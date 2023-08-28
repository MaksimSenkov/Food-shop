import { Outlet } from "react-router-dom";

import Header from "../../Shared Components/Header/Header";

export default function MainLayout() {
    return (
        <div className="bodyWrapper">
            <Header />

            <Outlet />
        </div>
    );
}
