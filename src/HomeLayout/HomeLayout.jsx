import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";




export default function HomeLayout()  {



    return(
<>



    < Navbar></Navbar>  


    <Outlet></Outlet>
    <div className="mt-40">
       <Footer></Footer>  
    </div>
   

</>
   
    )
}