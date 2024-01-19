import { useDispatch, useSelector } from 'react-redux';
const Page1: React.FC = () => {
  const { num, arr, token } = useSelector((state: rootState) => {
    return {
      num: state.NumStatus.num,
      arr: state.ArrStatus.arr,
      token: state.User.token,
    };
  });
  const dispatch = useDispatch();
  // 同步
  const changeNum = () => {
    dispatch({
      type: 'INCREMENT',
      payload: num + 1,
    });
  };

  // 异步
  const ayncChangeNum = () => {
    dispatch((dis: Function) => {
      setTimeout(() => {
        dis({
          type: 'INCREMENT',
          payload: num + 1,
        });
      }, 2000);
    });
  };
  const changeArr = () => {
    dispatch({
      type: 'PUSH',
      payload: { val: 40 },
    });
  };
  return (
    <div>
      Page1--- {num}
      <button onClick={changeNum}>同步+1</button>
      <button onClick={ayncChangeNum}>异步+1</button>
      <p>{arr}</p>
      <button onClick={changeArr}>num</button>
      <p>{token}</p>
    </div>
  );
};

export default Page1;
