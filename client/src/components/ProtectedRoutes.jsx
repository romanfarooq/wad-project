import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const { isLogin } = useSelector((state) => state.user);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
