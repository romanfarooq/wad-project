import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
