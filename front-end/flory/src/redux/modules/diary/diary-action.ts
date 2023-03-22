import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";

// 일기 생성
export const createDiaryAction = createAsyncThunk(
  "CREATE",
  async (diaryData: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.post(`/api/diary`, diaryData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 해당 유저의 연,월에 해당하는 일기목록 가져오기
export const GetDiaryByDateAction = createAsyncThunk(
  "GET_DIARY_DATE",
  async ({id, year, month} : {id: number, year : number,month : number},{rejectWithValue}) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();

      const { data } = await axios.get(`/api/diary`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);