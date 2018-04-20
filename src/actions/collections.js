import {
    FETCH_COLLECTIONS_REQUEST,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
} from '../constants/action-types';

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {id: 2, title: 'Welcome'},
                {id: 3, title: 'Hello'}
            ]);
        }, 2000);
    });
}

export function fetchCollections(userId, parentId) {
    return async (dispatch) => {
        dispatch(requestCollections(userId, parentId))
        const data = await Backendless.Persistence.of('collections').find();
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
