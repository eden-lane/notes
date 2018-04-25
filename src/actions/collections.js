import {
    FETCH_NODES_REQUEST,
    FETCH_NODES_SUCCESS,
    FETCH_NODES_FAILURE,
    SELECT_NODE
} from '../constants/action-types';
import { API } from '../services/api';

export function fetchNodes(parentId) {
    return async (dispatch) => {
        dispatch(requestNodes(parentId))
        const data = await API.collections.get(parentId)
            // .map(item => ({
            //     isOpen: false,
            //     isSelected: false
            // }));
        // { isOpen, isSelected}
        dispatch(receiveNodes(parentId, data))
    }
}

function requestNodes(parentId) {
    return {
        type: FETCH_NODES_REQUEST,
    }
}

function receiveNodes(parentId, data) {
    return {
        type: FETCH_NODES_SUCCESS,
        parentId,
        data
    }
}

export function selectNode(id) {
    return {
        type: SELECT_NODE,
        id
    }
}

export function openCollection(id) {
    return async dispatch => dispatch(fetchNodes(id))
}
