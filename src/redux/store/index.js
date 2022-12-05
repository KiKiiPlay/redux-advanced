import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import bookReducer from '../reducers/bookReducer'
// import cartReducer from '../reducers/cartReducer'
// import userReducer from '../reducers/userReducer'
// configureStore will set up the Redux Store for us!

// our redux store looked like this:
// const initialState = {
//   cart: {
//     content: []
//   },
//   user: {
//     name: ''
//   }
// }

const bigReducer = combineReducers({
  //   cart: cartReducer,
  //   user: userReducer,
  //   book: bookReducer,
});

const store = configureStore({
  reducer: bigReducer, // here there's place for just 1 value!
});

export default store;
