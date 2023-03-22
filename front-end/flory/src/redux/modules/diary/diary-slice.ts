import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryStateType } from "../../../models/diary/diaryStateType";
import { createDiaryAction, updatePositionAction } from "./diary-action";

const initialState: DiaryStateType = {
  diaryData: [],
  create: { loading: false, data: null, error: null },
  positionUpdate: { loading: false, data: null, error: null },
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    // 개별 꽃 위치 수정
    positionUpdate: (state, action) => {
      const filteredItem = state.diaryData.filter(
        (item: any) => item.id === action.payload.diaryId
      );

      filteredItem[0].x = action.payload.x;
      filteredItem[0].y = action.payload.y;
      filteredItem[0].z = action.payload.z;
    },
  },
  extraReducers: (builder) => {
    builder
      // 일기 작성
      .addCase(createDiaryAction.pending, (state) => {
        state.create.loading = true;
        state.create.data = null;
        state.create.error = null;
      })
      .addCase(createDiaryAction.fulfilled, (state, { payload }) => {
        state.create.loading = false;
        state.create.data = payload;
        state.create.error = null;

        console.log(state.create.data);
      })
      .addCase(createDiaryAction.rejected, (state, { payload }) => {
        state.create.loading = false;
        state.create.data = null;
        state.create.error = payload;
      })
      // 수정된 꽃들의 위치 서버에 전송
      .addCase(updatePositionAction.pending, (state) => {
        state.positionUpdate.loading = true;
        state.positionUpdate.data = null;
        state.positionUpdate.error = null;
      })
      .addCase(updatePositionAction.fulfilled, (state, { payload }) => {
        state.positionUpdate.loading = false;
        state.positionUpdate.data = payload;
        state.positionUpdate.error = null;
        console.log(payload);
      })
      .addCase(updatePositionAction.rejected, (state, { payload }) => {
        state.positionUpdate.loading = false;
        state.positionUpdate.data = null;
        state.positionUpdate.error = payload;
        console.log(payload, 99);
      });
  },
});

export const { positionUpdate } = diarySlice.actions;

export default diarySlice.reducer;
