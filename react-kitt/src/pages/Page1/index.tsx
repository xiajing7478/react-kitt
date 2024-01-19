import { useSelector, useDispatch } from 'react-redux';
const Page1: React.FC = () => {
  const { num } = useSelector((state: RootState) => {
    return {
      num: state.num,
    };
  });
  const dispatch = useDispatch();
  const changeNum = () => {
    dispatch({
      type: 'INCREMENT',
      payload: num + 1,
    });
  };
  return (
    <div>
      Page1--- {num}
      <button onClick={changeNum}>num</button>
    </div>
  );
};

export default Page1;
