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
            const { parentId } = action
            if (!parentId) {
                return state.set('items', List(action.data))
            } else {
                const key = state.get('items').findKey(item => item.objectId == parentId)

                return state.updateIn(['items', key], (list) => {
                    return {
                        ...list,
                        items: List(action.data)
                    }
                })
            }
        default:
            return state;
    }


}
