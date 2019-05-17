import { createStore } from 'redux'
import todoApp from './reducer';
import initState from './initState';

let store = createStore(todoApp)
export default store