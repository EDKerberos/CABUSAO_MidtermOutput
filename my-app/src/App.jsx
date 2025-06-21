import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link ,Navigate } from 'react-router-dom'

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'
import Product from './pages/Product'

function App() {

  const products = [
    {
      "id": "1",
      "name": "Steak",
      "price": 500,
      "description": "The start of everything.",
      "image": "https://i.imgur.com/thuCZTL.jpeg",
      "altimg": "Product1_SuperAwesomeSteak!!",
    },
    {
      "id": "2",
      "name": "(Slightly Used) Cast Iron Pan",
      "price": 1500,
      "description": "I promise its clean.",
      "image": "https://i.imgur.com/iGeY3MZ.jpeg",
      "altimg": "Product2_SlightlyUsedCastIronPan",
    },
    {
      "id": "3",
      "name": "Cow (For Butter)",
      "price": 5,
      "description": "This cow makes excellent butter! Her name is Monique Gadot. DISCLAIMER: YOU WILL NOT OWN THE COW!! ITS MINE MINE MIIINE!!",
      "image": "https://i.imgur.com/PZsR6Ns.jpeg",
      "altimg": "Product3_JoyousCowThatsFullofButter",
    },
    {
      "id": "4",
      "name": "Thyme",
      "price": 75,
      "description": "It's thyme idrk what else to say",
      "image": "https://i.imgur.com/MGFBVsp.jpeg",
      "altimg": "Product4_GirlItsThymeAnoba",
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Super Awesome Steak Store</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/productlist">Products</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home />} />              
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/productlist" element = {<ProductList products={products}/>} />
          <Route path="/products/:urlId" element ={<Product products={products} />} />
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
