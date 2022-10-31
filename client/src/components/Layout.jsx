import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      <div className="w-full min-h-screen dark:bg-gray-900">
        <div className="w-4/5 ml-auto py-10 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
