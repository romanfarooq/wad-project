import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
