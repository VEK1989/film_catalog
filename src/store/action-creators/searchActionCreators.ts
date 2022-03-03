import { SearchActions, SearchActionstypes } from "../types/searchTypes";

export const searchActionCreators = {
  setSearchName: (query: string): SearchActions => ({
    type: SearchActionstypes.SET_SEARCH_NAME,
    payload: query,
  }),
  setFilterChange: (value: string): SearchActions => ({
    type: SearchActionstypes.SET_FILTER_CHANGE,
    payload: value,
  }),
};
