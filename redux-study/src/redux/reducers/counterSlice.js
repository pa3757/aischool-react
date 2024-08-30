import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      /*
        action : type, payload로 구성된 객체
        type : 명령에 대한 구분값
        payload : 명령에 필요한 값을 저장하는 속성
        ex) incrementByAmount({num : 2 }) -> {type : "counter/incrementByAmount", payload : {num : 2}}
       */
      state.count += action.payload.num;
    },
    increment10: (state) => {
      state.count += 10;
    },
    decrement10: (state, action) => {
      state.count -= action.payload.num;
    },
  },
});

console.log(counterSlice);

// 컴포넌트에서 reducers내 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions;

// store에서 counterSlice의 reducer를 사용하기 위해 export
export default counterSlice.reducer;
