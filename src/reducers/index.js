import { combineReducers } from 'redux';
import { FETCH_NODES_REQUEST } from '../constants/action-types';
import collections from './collections';

export default combineReducers({
    collections: collections
})
