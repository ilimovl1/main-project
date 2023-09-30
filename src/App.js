import './index.scss';
import Header from './Header/Header';
import Content from './maincontent/Content';
import Slider from "./slider/slider"
import Columns from './columns/column';
import Second from './secondMain/second';
import Footer from './footer/footer';
import LastFooter from './lastfooter/lastfooter';


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

    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>

        {/* <Header/> */}
        <Content/>
        <Slider/>
        <Columns/>
        <Second/>
        <Footer/>
        <LastFooter/> 

   </div>
  
  )
  
}

export default App;
