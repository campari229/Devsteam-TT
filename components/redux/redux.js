import {createStore} from 'redux';
const ADD_PHOTOS_LIST = 'ADD_PHOTOS_LIST';

export const addPhotos = (photos) => ({
  type: ADD_PHOTOS_LIST,
  photos: photos,
});

const initialState = {
  photos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PHOTOS_LIST':
      return {
        ...state,
        photos: action.photos,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);

