import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "../redux/reducers/counterSlice";

const Counter = () => {
  // store에 저장된 state값을 가져오기 위해 useSelector 사용
  // 매개변수 : state -> store에 보관된 state정보를 객체로 반환
  const cnt = useSelector((state) => state.counter.count);

  // useDispatch : state를 변경하기 위한 명령을 보내는 함수
  const dispatch = useDispatch();

  const handleClick1 = () => {
    dispatch(CounterActions.increment());
  };
  const handleClick2 = () => {
    dispatch(CounterActions.decrement());
  };
  const handleClick3 = () => {
    dispatch(CounterActions.incrementByAmount({ num: 2 }));
  };
  const handleClick4 = () => {
    dispatch(CounterActions.increment10());
  };
  const handleClick5 = () => {
    dispatch(CounterActions.decrement10({ num: 10 }));
  };

  console.log(cnt);

  return (
    <div>
      <h1>Redux Toolkit 활용 실승</h1>
      <h2>{cnt}</h2>
      <button onClick={handleClick1}>증가</button>
      <button onClick={handleClick2}>감소</button>
      <button onClick={handleClick3}>2씩증가</button>
      <button onClick={handleClick4}>+10</button>
      <button onClick={handleClick5}>-10</button>
    </div>
  );
};

export default Counter;
