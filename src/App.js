
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticleList } from './components/ArticleList';
function App() {
  return (
    <BrowserRouter>
     <NavBar />

    <ArticleList />
  
    <Footer />
    
    </BrowserRouter>
  );
}

export default App;
