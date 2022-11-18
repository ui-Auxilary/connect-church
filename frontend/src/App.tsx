import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './config/global';

import LandingPage from './pages/LandingPage';
import Offering from './pages/Offering';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/offering" element={<Offering />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;