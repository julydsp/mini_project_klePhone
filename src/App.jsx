import { BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/addProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productPage" element={<ProductPage />}></Route>
        <Route path="/addproductPage" element={<AddProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
