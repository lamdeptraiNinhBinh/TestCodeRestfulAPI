import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Product from './component/Product/Product';
import CreateProduct from './component/Product/CreateProduct';
import EditProduct from './component/Product/EditProduct';

function App() {
  return (
    <>
    <ul>
      <li><Link to="/">Product</Link></li>
      {/*  */}
      <li><Link to="/create">Create Product</Link></li>
      
    </ul>

    <Routes>
      <Route path='/' element={<Product />} />
      <Route path='/create' element={<CreateProduct />} />
      <Route path='/edit/:id' element={<EditProduct />} />
    </Routes>
    </>
  );
}

export default App;
