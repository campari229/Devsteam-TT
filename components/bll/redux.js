const ADD_PHOTOS_LIST = 'ADD_PHOTOS_LIST';
const LOADING_ERROR = 'LOADING_ERROR';

export const getPhotos = (photos) => ({
  type: ADD_PHOTOS_LIST,
  photos: photos,
});

export const throwLoadingError = () => ({
  type: LOADING_ERROR,
});

const initialState = {
  photos: [],
  loadingError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PHOTOS_LIST':
      return {
        ...state,
        photos: action.photos,
      };
    case 'LOADING_ERROR':
      return {
        ...state,
        loadingError: true,
      };
    default:
      return state;
  }
};
