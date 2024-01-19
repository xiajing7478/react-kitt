// import { Button } from 'antd';
import routers from './router';
import { useRoutes } from 'react-router-dom';

function App() {
  const outLet = useRoutes(routers);
  // console.log(outLet);
  return (
    <div>
      {/* hello react
      <Link to="/home">home</Link>|<Link to="/about">about</Link>|
      <Link to="/login">login</Link> */}
      {/* <Button type="primary">Button</Button> */}
      {/* {outlet || <Outlet />} */}
      {/* <Outlet /> */}
      {outLet}
    </div>
  );
}

export default App;
