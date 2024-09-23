import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Item List App</h1>
        <SearchBar />
        <ItemList />
      </div>
    </Provider>
  );
}

export default App;
