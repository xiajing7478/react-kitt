// import { Button } from 'antd';
import { useEffect } from 'react';
import routers from './router';
import { useSelector } from 'react-redux';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const navigator = useNavigate();
  useEffect(() => {
    navigator('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}

function Home() {
  const navigator = useNavigate();
  useEffect(() => {
    navigator('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}

function BeforeRouterEnter() {
  const { token } = useSelector((state: rootState) => {
    return {
      token: state.User.token,
    };
  });
  const outLet = useRoutes(routers);
  const location = useLocation();
  console.log(location);
  if (location.pathname === '/login' && token) {
    return <Home />;
  }
  if (location.pathname !== '/login' && !token) {
    return <Login />;
  }
  return outLet;
}

function App() {
  // const outLet = useRoutes(routers);
  // console.log(outLet);
  return (
    <div>
      {/* hello react
      <Link to="/home">home</Link>|<Link to="/about">about</Link>|
      <Link to="/login">login</Link> */}
      {/* <Button type="primary">Button</Button> */}
      {/* {outlet || <Outlet />} */}
      {/* <Outlet /> */}
      {/* {outLet} */}

      <BeforeRouterEnter />
    </div>
  );
}

export default App;
