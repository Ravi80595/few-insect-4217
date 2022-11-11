import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from "./Routes/AllRoutes"
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div>
    <Navbar/>
    <AllRoutes/>
     {/* //<HomePage /> */}
    </div>
  );
}

export default App;
