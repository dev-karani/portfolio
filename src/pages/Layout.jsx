import { Outlet } from "react-router-dom";
import Navbar from "../components/pieces/navbar";
import Footer from "../components/pieces/footer";

const Layout =()=> {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
