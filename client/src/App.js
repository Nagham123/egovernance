import React from 'react';
import AppNavbar from './components/AppNavbar';
import CookBook from './components/CookBook';
import BookModal from './components/BookModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <BookModal />
      <CookBook />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
