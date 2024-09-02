import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: [],
    keyword: "",
  },
  reducers: {
    addComment: (state, action) => {
      state.commentList = state.commentList.concat(action.payload);
    },
    searchComment: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const CommentActions = commentSlice.actions;

export default commentSlice.reducer;
