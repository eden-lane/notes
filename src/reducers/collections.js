import {
    FETCH_COLLECTIONS_REQUEST,
    FETCH_COLLECTIONS_SUCCESS,
    SELECT_NODE
} from '../constants/action-types';
import { List, Map } from 'immutable';

/**
    collections: [
        {isSelected: false, items: []}
        {isSelected: true, items: [
            {isSelected: false, items: []}
        ]}

    ]
 */

const defaultState = List([])

export default (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_NODE:
            const newState = deselect(state)
            return updateNode(newState, action.id, (item) => ({
                ...item,
                isSelected: true
            }))
        case FETCH_COLLECTIONS_SUCCESS:
            const { parentId } = action
            if (!parentId) {
                return List(action.data)
            } else {
                return updateNode(state, parentId, (item) => {
                    return {
                        ...item,
                        items: List(action.data)
                    }
                })
            }
        default:
            return state;
    }
}

function updateNode(state, id, func) {
    const key = state.findKey(item => item.objectId == id)
    return state.update(key, func)
}

function deselect(list) {
    if (!list) {
        return list
    }
    if (list.title === 'Personal')
        debugger
    return list.map(item => ({
        ...item,
        isSelected: false,
        items: deselect(list.items)
    }))
}
