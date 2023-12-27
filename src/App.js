import './App.css';
import NavBar from './Components/NavBar/NavBar';
import  {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import PromoCodem from './Components/PromoCodem/PromoCodem';
function App() {
  return (
     <div>
      <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banners = {men_banner} category = "men" />}/>
        <Route path='/women' element={<ShopCategory banners = {women_banner}category = "women"/>}/>
        <Route path='/kids' element={<ShopCategory banners = {kids_banner}category = "kids"/>}/>
        <Route path='/promo' element={<PromoCodem/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
