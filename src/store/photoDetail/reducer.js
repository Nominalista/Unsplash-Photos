import * as actions from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
   photo: undefined
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case actions.RETRIEVE_PHOTO_REQUESTED:
            return state.merge({ photo: undefined });
        case actions.RETRIEVE_PHOTO_DONE:
            return state.merge({ photo: action.photo });
        case actions.RETRIEVE_PHOTO_FAILED:
            console.log("Error while retrieving photoList.");
            return state;
        default:
            return state;
    }
}

// selectors

export function getPhoto(state) {
    return state.photoDetail.photo;
}