import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Item One', description: 'This is the first item' },
    { id: 2, name: 'Item Two', description: 'This is the second item' },
    { id: 3, name: 'Item Three', description: 'This is the third item' },
    { id: 4, name: 'Item Four', description: 'This is the fourth item' },
    { id: 5, name: 'Item Five', description: 'This is the fifth item' },
    { id: 6, name: 'Item Six', description: 'This is the sixth item' },
    { id: 7, name: 'Item Seven', description: 'This is the seventh item' },
    { id: 8, name: 'Item Eight', description: 'This is the eighth item' },
    { id: 9, name: 'Item Nine', description: 'This is the ninth item' },
    { id: 10, name: 'Item Ten', description: 'This is the tenth item' },
    { id: 11, name: 'Item Eleven', description: 'This is the eleventh item' },
    { id: 12, name: 'Item Twelve', description: 'This is the twelfth item' },
  ],
  searchTerm: '',
};


const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setItems, setSearchTerm } = itemSlice.actions;
export default itemSlice.reducer;
