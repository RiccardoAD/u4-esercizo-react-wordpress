
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from './components/ArticleList';
import  { Jumbo } from './components/Jumbo';
function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Jumbo/>
    <ArticleList />
  
    <Footer />
    
    </BrowserRouter>
  );
}

export default App;
