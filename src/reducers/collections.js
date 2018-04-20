import {
    FETCH_COLLECTIONS_REQUEST,
    FETCH_COLLECTIONS_SUCCESS
} from '../constants/action-types';
import { List, Map } from 'immutable';

/**
    collection: {
        title: 'Inbox',
        type: 'collection'
        isFavorite: false,
        isFetching: false,
        items: [
            title: 'Welcome'
            type: 'note',
        ]
    }
 */

const defaultState = Map({
    filter: '',
    sort: '',
    isFetching: false,
    items: List([])
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_REQUEST:
            return state.set('isFetching', true);
        case FETCH_COLLECTIONS_SUCCESS:
            return state.set('items', List(action.data))
        default:
            return state;
    }


}
