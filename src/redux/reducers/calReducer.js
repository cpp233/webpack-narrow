const calReducer = (
  state = {
    num: 0,
  },
  action
) => {
  switch (action.type) {
    case 'ADD':
      return { num: state.num + action.data };
    case 'SUB':
      return { num: state.num - action.data };
    default:
      return { ...state };
  }
};

export default calReducer;
