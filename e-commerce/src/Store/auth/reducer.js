const defaultValue = {
  isLoggedIn: false,
  username: "",
  email: "",
};

export const authReducerActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export default function authReducer(state = defaultValue, action) {
  console.log(action.type);
  switch (action.type) {
    case authReducerActionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.data.username,
        email: action.data.email,
      };
    case authReducerActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: fale,
        username: "",
        email: "",
      };
    default:
      return state;
  }
}
