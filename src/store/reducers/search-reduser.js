import { searchActionTypes } from "../actionTypes/searchActionTypes";

let initialState = {
  searchName: "",
  filter: "popular",
};

const searchReduser = (state = initialState, action) => {
  switch (action.type) {
    case searchActionTypes.SET_SEARCH_NAME:
      return {
        ...state,
        searchName: action.query,
      };

    case searchActionTypes.SET_FILTER_CHANGE:
      return {
        ...state,
        filter: action.value,
      };

    default:
      return state;
  }
};

export default searchReduser;
