import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';

const store=createStore(reducers,applyMiddleware(ReduxThunk))
export default store;
