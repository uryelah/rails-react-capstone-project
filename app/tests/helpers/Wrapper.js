import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../src/store';

const Wrapper = ({ children }) => {
  return(
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          { children }
        </BrowserRouter>
      </React.StrictMode>
    </Provider>    
  )
};

export default Wrapper;
