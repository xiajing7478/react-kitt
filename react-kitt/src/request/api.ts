import httpInstance from './index';

// export const capchaAPI = (): Promise<CapchaData> => {
//   return request.get('/prod-api/captchaImage');
// };

export const login = ({ account, password }) => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password,
    },
  });
};
