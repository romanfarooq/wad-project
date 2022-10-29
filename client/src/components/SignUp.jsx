import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ isAuth }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  return (
    <>
      <div></div>
    </>
  );
}

export default SignUp;
