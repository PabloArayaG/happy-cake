import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import ContactoPage from "./views/ContactoPage";
import Navbar from "./components/Navbar"

const App = () => {
return (
<div>
<Navbar/>
  <Routes> 
    <Route
    path="/"
    element={<HomePage/>}
    /> 
    <Route
    path="/Contacto"
    element={<ContactoPage/>}
    /> 
  </Routes>
</div>
);
};
export default App;