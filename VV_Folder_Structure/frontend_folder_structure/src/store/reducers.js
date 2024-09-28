import { ACTION_TYPE } from "./action";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
