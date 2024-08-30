import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import logger from "redux-logger";

/*
    store : state, reducer를 관리하는 역할
            하나의 프로젝트에 하나의 store만 생성

    configureStore : store를 생성하는 함수

    middleware : store에 action이 dispatch되어 reducer에 전달되기 전에 실행되는 코드
*/

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  midddleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
