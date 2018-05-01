import {
    FETCH_NODES_REQUEST,
    FETCH_NODES_SUCCESS,
    SELECT_NODE
} from '../constants/action-types';
import { List, Map } from 'immutable';

const defaultState = Map({
    itemsById: Map({}),
    allItems: List([])
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_NODES_SUCCESS:
            const { data, parentId } = action
            const newState = state.mergeDeep({
                'itemsById': data.reduce((data, item) => {
                    data[item.objectId] = item
                    return data
                }, {}),
                allItems: parentId
                    ? []
                    : data.map(item => item.objectId)
            })
            return newState
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
