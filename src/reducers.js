import { ITEM_REQUESTED, ITEM_REQUESTED_SUCCESS } from './actions';

export const reducer = (
  state = {
    0: [],
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case ITEM_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case ITEM_REQUESTED_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
