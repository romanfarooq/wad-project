import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Email from './components/Email';
import About from './components/About';
import Settings from './components/Settings';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
      {isAuth && <Navbar />}
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/email" element={<Email />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login isAuth={isAuth} isDark={isDark} />} />
        <Route path="/signup" element={<SignUp isAuth={isAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
