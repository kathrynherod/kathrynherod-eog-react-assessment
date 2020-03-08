import { createSlice, PayloadAction } from 'redux-starter-kit';

export type GetMetrics = { getMetrics: [] };

export type ApiErrorAction = { error: string };

const initialState = { getMetrics: [] };

const slice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    metricsDataReceived: (state, action: PayloadAction<GetMetrics>) => {
      const { getMetrics } = action.payload;
      state.getMetrics = getMetrics;
    },
    metricsApiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
