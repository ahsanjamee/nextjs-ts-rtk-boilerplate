import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import httpServices from '../../utils/httpServices';

interface Image {
    id: number;
    alt: string;
    src: {
        original: string;
    };
}

export const initialState = [] as Image[];

export const fetchImages = createAsyncThunk('image/fetchImages', async () => {
    const response = await httpServices.get('per_page=1');
    return response.data.photos;
});

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchImages.fulfilled.type]: (state, { payload }: PayloadAction<Image[]>) => {
            state.push(...payload);
        },
    },
});

export default imageSlice.reducer;
