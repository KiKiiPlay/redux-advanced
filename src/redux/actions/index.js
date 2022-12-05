export const SET_FAVOURITE = "SET_FAVOURITE";

export const addToFavourite = (a) => {
  return {
    type: SET_FAVOURITE,
    payload: a,
  };
};
