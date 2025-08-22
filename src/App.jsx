import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import BookDetails from './pages/BookDetails';
import AboutMe from './pages/AboutMe';
import ScrollToTop from './components/ScrollToTop';
import BookShop from './pages/BookShop';
import EBookShop from './pages/EBookShop';
import AudioBookShop from './pages/AudioBookShop';

export default function App() {
  return (
    <div className="min-w-screen min-h-screen m-0 p-0">
      <Router>
        <ScrollToTop /> 
        <Routes>
          {/* Routes without Navbar */}
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bookdetails/:id" element={<BookDetails />} />
          <Route path="/" element={<AboutMe />} />
          <Route path="/bookshop" element={<BookShop />} />
          <Route path="/ebooks" element={<EBookShop />} />
          <Route path="/audiobooks" element={<AudioBookShop />} />
        </Routes>
      </Router>
    </div>
  );
}