import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Email from './components/Email';
import About from './components/About';
import Settings from './components/Settings';
import LoginSignUp from './components/LoginSignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
