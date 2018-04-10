import unsplashService from '../../services/unsplash';

// Types

export const RETRIEVE_PHOTO_REQUESTED = 'photoDetail.RETRIEVE_PHOTO_REQUESTED';
export const RETRIEVE_PHOTO_DONE = 'photoDetail.RETRIEVE_PHOTO_DONE';
export const RETRIEVE_PHOTO_FAILED = 'photoDetail.RETRIEVE_PHOTO_FAILED';

// Epics

export const retrievePhotoEpic = action$ => {
    return action$
        .ofType(RETRIEVE_PHOTO_REQUESTED)
        .mergeMap(action => {
                return unsplashService
                    .getPhoto(action.photoId)
                    // .getSamplePhoto()
                    .map(photo => ({
                        type: RETRIEVE_PHOTO_DONE,
                        photo: photo
                    }))
                    .catch(({ type: RETRIEVE_PHOTO_FAILED }))
            }
        );
};

// Actions

export function retrievePhoto(photoId) {
    return { type: RETRIEVE_PHOTO_REQUESTED, photoId: photoId };
}