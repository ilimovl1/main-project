import './index.scss';
import { Route, Routes } from 'react-router-dom';
import Store from "./Store/Store"
import App from "./App"
import Login from './login/login';
import About from './about/about';
import Header from './Header/Header';



function Router() {

  window.onload = function () {
    document.body.classList.add('loaded');
  }

  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

  return (
  
  <div className='Main'>

    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>
    
    <Header/>

    <Routes>
      
      <Route path='/store' element={<Store/>}/>

      <Route path='/' element={<App/>}/>

      <Route path='/login' element={<Login/>}/>

      <Route path='/cart' element={<About/>}/>

    </Routes> 

   </div>
  
  )
  
}

export default Router;
