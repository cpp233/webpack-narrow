export const sub = num => {
  return async dispatch => {
    dispatch({
      type: 'SUB',
      data: num,
    });
  };
};

export const add = num => {
  return async dispatch => {
    dispatch({
      type: 'ADD',
      data: num,
    });
  };
};
