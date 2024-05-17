import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Product from './component/Product/Product';
import CreateProduct from './component/Product/CreateProduct';
import Test from './component/Product/Test';

function App() {
  return (
    <>
    <Test /> 
    </>
    // <>
    // <ul>
    //   <li><Link to="/">Product</Link></li>
    //   {/*  */}
    //   <li><Link to="/create">Create Product</Link></li>
      
    // </ul>

    // <Routes>
    //   <Route path='/' element={<Product />} />
    //   <Route path='/create' element={<CreateProduct />} />
    // </Routes>
    // </>
  );
}

export default App;
