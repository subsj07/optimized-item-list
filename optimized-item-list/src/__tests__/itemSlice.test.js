import itemReducer, { setItems, setSearchTerm } from './itemSlice';

describe('itemSlice reducer', () => {
  const initialState = { items: [], searchTerm: '' };

  it('should handle setItems', () => {
    const newState = itemReducer(initialState, setItems([{ id: 1, name: 'Item 1' }]));
    expect(newState.items).toEqual([{ id: 1, name: 'Item 1' }]);
  });

  it('should handle setSearchTerm', () => {
    const newState = itemReducer(initialState, setSearchTerm('search'));
    expect(newState.searchTerm).toBe('search');
  });
});
