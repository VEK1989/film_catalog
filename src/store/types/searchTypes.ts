export interface SearchTypes {
  searchName: string;
  filter: string;
}

export enum SearchActionstypes {
  SET_SEARCH_NAME = "SET_SEARCH_NAME",
  SET_FILTER_CHANGE = "SET_FILTER_CHANGE",
}

interface SetSearchName {
  type: SearchActionstypes.SET_SEARCH_NAME;
  payload: string;
}

interface SetFilterChange {
  type: SearchActionstypes.SET_FILTER_CHANGE;
  payload: string;
}

export type SearchActions = SetSearchName | SetFilterChange;
