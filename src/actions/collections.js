import {
    FETCH_COLLECTIONS_REQUEST,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
} from '../constants/action-types';
import { API } from '../services/api';

export function fetchCollections(parentId) {
    return async (dispatch) => {
        dispatch(requestCollections(parentId))
        const data = await API.collections.get(parentId)
            // .map(item => ({
            //     isOpen: false,
            //     isSelected: false
            // }));
        // { isOpen, isSelected}
        dispatch(receiveCollections(parentId, data))
    }
}

function requestCollections(parentId) {
    return {
        type: FETCH_COLLECTIONS_REQUEST,
    }
}

function receiveCollections(parentId, data) {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        parentId,
        data
    }
}

export function openCollection(id) {
    return async dispatch => dispatch(fetchCollections(id))
}
