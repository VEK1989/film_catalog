import {
  SearchActions,
  SearchActionstypes,
  SearchTypes,
} from "../types/searchTypes";

const initialState: SearchTypes = {
  searchName: "",
  filter: "popular",
};

const searchReduser = (
  state = initialState,
  action: SearchActions
): SearchTypes => {
  switch (action.type) {
    case SearchActionstypes.SET_SEARCH_NAME:
      return {
        ...state,
        searchName: action.payload,
      };

    case SearchActionstypes.SET_FILTER_CHANGE:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default searchReduser;
