import {
    FETCH_COLLECTIONS_REQUEST
} from '../constants/action-types';

export function requestCollections(parentId) {
    return {
        type: FETCH_COLLECTIONS_REQUEST,
        parentId
    }
}
