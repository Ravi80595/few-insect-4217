import Navbar from './Components/Navbar/Navbar';
// import ShopStructure from './Components/ShopStructure';
import { FooterContainer } from './Pages/Footer/containers/footer';
import AllRoutes from "./Routes/AllRoutes"
// import HomePage from './Pages/HomePage';
// import DataFetch from './Utils/DataFetch';
// import Admin from './Components/Admin/Admin';
// import Dashboard from './Components/Admin/Dashboard';


function App() {
  return (
    <div>
    <Navbar/>

    <AllRoutes/>
    {/* <Admin /> */}

    {/* <ShopStructure/> */}
    <AllRoutes/>
    <FooterContainer/>
    {/* <Admin /> */}
    {/* <Dashboard/> */}

     {/* //<HomePage /> */}

    </div>
  );
}

export default App;
