import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './config/global';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;