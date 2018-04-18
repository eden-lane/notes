import {
    FETCH_COLLECTIONS_REQUEST
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
    items: List([
        {title: 'next', id: 1}
    ])
});

window.x = defaultState;

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_REQUEST:
            return state.set('isFetching', true);
        default:
            return state;
    }


}
