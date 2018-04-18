import { combineReducers } from 'redux';
import { FETCH_COLLECTIONS_REQUEST } from '../constants/action-types';
import collections from './collections';

export default combineReducers({
    collections: collections
})
