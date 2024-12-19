import './App.css';
import CategorySection from './components/categorySection';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';
import Navbar from './components/navbar';
import NearbyDeals from './components/nearbyDeals';
import SearchForm from './components/searchForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderSection/>
      <SearchForm/>
      <CategorySection/>
      <NearbyDeals/>
      <Footer/>
    </div>
  );
}

export default App;
