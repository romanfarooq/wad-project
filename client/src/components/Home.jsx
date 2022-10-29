import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ isAuth }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);
  return (
    <>
      <div></div>
    </>
  );
}

export default Home;
