import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from "./Routes/AllRoutes"
import HomePage from './Pages/HomePage';
import DataFetch from './Utils/DataFetch';


function App() {
  return (
    <div>
    <Navbar/>
    <AllRoutes/>
     {/* //<HomePage /> */}
     {/* <DataFetch/> */}

    </div>
  );
}

export default App;
