import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Product from './component/Product/Product';
import CreateProduct from './component/Product/CreateProduct';
import Test from './component/Product/Test';
import EditProduct from './component/Product/EditProduct';
import DeleteProduct from './component/Product/DeleteProduct';

function App() {
  return (
    // <>
    // <Test /> 
    // </>
    <>
    <ul>
      <li><Link to="/">Product</Link></li>
      {/*  */}
      <li><Link to="/create">Create Product</Link></li>
      <li><Link to="/test">Test</Link></li>
      
    </ul>

    <Routes>
      <Route path='/' element={<Product />} />
      <Route path='/create' element={<CreateProduct />} />
      <Route path='/edit/:id' element={<EditProduct />} />
      <Route path='/delete/:id' element={<DeleteProduct />} />
      <Route path='/test' element={<Test />} />
    </Routes>
    </>
  );
}

export default App;
