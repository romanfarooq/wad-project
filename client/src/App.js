import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Email from './components/Email';
import About from './components/About';
import Settings from './components/Settings';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/" element={<Navbar isDark={isDark} setIsDark={setIsDark} />}>
            <Route index element={<Home />} />
            <Route path="/email" element={<Email />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login isDark={isDark} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
