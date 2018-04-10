import * as actions from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    photosById: undefined,
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case actions.RETRIEVE_PHOTO_LIST_REQUESTED:
            return state.merge({ photosById: undefined });
        case actions.RETRIEVE_PHOTO_LIST_DONE:
            return state.merge({ photosById: action.photosById });
        case actions.RETRIEVE_PHOTO_LIST_FAILED:
            console.log("Error while retrieving photoList.");
            return state;
        default:
            return state;
    }
}

// selectors

export function getPhotosById(state) {
    return state.photoList.photosById;
}

export function getPhotosIdArray(state) {
    const photosById = state.photoList.photosById;
    if (photosById) {
        return Object.keys(photosById);
    } else {
        return undefined
    }
}