import { SET_FAVOURITE } from "../actions";

const initialState = {
  // we're already in the "book" slice of the Redux store
  favJobs: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITE:
      return {
        ...state,
        favJobs: action.payload,
      };

    default:
      return state;
  }
};

export default favReducer;
