import {
    FETCH_COLLECTIONS_REQUEST,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
} from '../constants/action-types';
import { API } from '../services/api';

export function fetchCollections(userId, parentId) {
    return async (dispatch) => {
        dispatch(requestCollections(userId, parentId))
        const data = await API.collections.get(parentId)
            // .map(item => ({
            //     isOpen: false,
            //     isSelected: false
            // }));
        // { isOpen, isSelected}
        dispatch(receiveCollections(userId, parentId, data))
    }
}

function requestCollections(userId, parentId) {
    return {
        type: FETCH_COLLECTIONS_REQUEST,
    }
}

function receiveCollections(userId, parentId, data) {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        data
    }
}
