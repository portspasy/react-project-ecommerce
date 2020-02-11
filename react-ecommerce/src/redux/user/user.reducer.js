const INITIAL_STATE = {
  currentUser: null
};

// if the state is undefine, this means will take by defult the INITIAL_STATE value.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
