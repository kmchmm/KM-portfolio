import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;