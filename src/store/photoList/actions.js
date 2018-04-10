import unsplashService from '../../services/unsplash';

// Types

export const RETRIEVE_PHOTO_LIST_REQUESTED = 'photoList.RETRIEVE_PHOTO_LIST_REQUESTED';
export const RETRIEVE_PHOTO_LIST_DONE = 'photoList.RETRIEVE_PHOTO_LIST_DONE';
export const RETRIEVE_PHOTO_LIST_FAILED = 'photoList.RETRIEVE_PHOTO_LIST_FAILED';

// Epics

export const retrievePhotosEpic = action$ => {
    return action$
        .ofType(RETRIEVE_PHOTO_LIST_REQUESTED)
        .mergeMap(action => {
                return unsplashService
                    .getPhotoList()
                    //.getSamplePhotoList()
                    .map(photoArray => {
                        const photosById = photoArray.reduce((map, photo) => {
                            map[photo.id] = photo;
                            return map;
                        }, {});

                        return {
                            type: RETRIEVE_PHOTO_LIST_DONE,
                            photosById: photosById
                        };
                    })
                    .catch(({ type: RETRIEVE_PHOTO_LIST_FAILED }))
            }
        );

};

// Actions

export function retrievePhotos() {
    return { type: RETRIEVE_PHOTO_LIST_REQUESTED };
}