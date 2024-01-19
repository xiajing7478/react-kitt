import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'reset-css';
import '@/assets/styles/global.scss';
// import Router from '@/router';
import { BrowserRouter } from 'react-router-dom';

// 状态管理
import { Provider } from 'react-redux';
import store from '@/store';
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
