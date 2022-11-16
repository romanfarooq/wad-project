import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
