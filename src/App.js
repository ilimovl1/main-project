import './index.scss';
import Header from './Header/Header';
import Content from './maincontent/Content';
import Slider from "./slider/slider"

function App() {

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

    <div class="preloader">
      <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
      </div>
    </div>

    
    
    <Header/>
    <Content/>
    <Slider/>
        
    
    
   </div>
  
  )
  
}

export default App;
