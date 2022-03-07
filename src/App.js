import './App.css';
import Auction from './Components/Home/Auction';
import Banner from './Components/Home/Banner';
import Category from './Components/Home/Category';
import Creators from './Components/Home/Creators';
import Footer from './Components/Home/Footer';
import HowItWorks from './Components/Home/HowItWorks';
import Popular from './Components/Home/Popular';
import Subscribe from './Components/Home/Subscribe';
import Header from './Components/Layout/Header';

function App() {
  return (
    <div className='main-wrapper '>
      <Header />
      <Banner />
      <Auction />
      <HowItWorks />
      <Popular />
      <Category />
      <Creators />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
