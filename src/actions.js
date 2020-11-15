export const ITEM_REQUESTED = 'ITEM_REQUESTED';
export const ITEM_REQUESTED_SUCCESS = 'ITEM_REQUESTED_SUCCESS';

export const requestItems = () => {
  return {
    type: ITEM_REQUESTED,
  };
};

export const requestItemsSuccess = (data) => {
  return {
    type: ITEM_REQUESTED_SUCCESS,
    payload: data,
  };
};
