import './App.css';
import CategorySection from './components/categorySection';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';
import Navbar from './components/navbar';
import SearchForm from './components/searchForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderSection/>
      <SearchForm/>
      <CategorySection/>
      <Footer/>
    </div>
  );
}

export default App;
