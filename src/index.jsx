import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addBlog, editBlog, removeBlog } from './actions/blogAction';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/sass/style.scss'

import preloader from './assets/img/preloader.gif'

import { Provider } from 'react-redux';
import { getBlogsFromDatabase } from './actions/blogAction';
// import './assets/sass/styleisleyencard.scss'

const store = configureStore();



const result = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
)


ReactDOM.render(
<div style={{"backgroundColor":"#DEDFDF","height":"100vh"}} className='d-flex justify-content-center align-items-center'><img src={preloader} alt="mypreloader" /></div>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
    
})
