import { lazy, Suspense } from 'react';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
const Page1 = lazy(() => import('@/pages/Page1'));
const Page2 = lazy(() => import('@/pages/Page2'));
const User = lazy(() => import('@/pages/User'));
// import Login from '@/pages/Login';
// import App from '@/App';
import { Navigate } from 'react-router-dom';

const withFallback = (comp: React.JSX.Element) => {
  return <Suspense fallback={<div>loading...</div>}>{comp}</Suspense>;
};

/**
 * 路由第二种写法
 */
interface Route {
  path: string;
  element: React.ReactNode;
  children?: Route[];
}
const routes: Route[] = [
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withFallback(<Page1 />),
      },
      {
        path: '/page2',
        element: withFallback(<Page2 />),
      },
      {
        path: '/page3/user',
        element: withFallback(<User />),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/page1" />,
  },
];

export default routes;

/**
 * 路由第一种写法
 */
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// const baseRouter = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

// export default baseRouter;
