import { createContext, useReducer } from "react";

const initialState = {
  timeFrameType: "weekly",
};

const Context = createContext();

const UPDATE_TRACKING_ACTION = "UPDATE_TRACKING_TYPE";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_TRACKING_ACTION:
      return { ...state, timeFrameType: payload };

    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    timeFrameType: state.timeFrameType,
    updateType: (type) =>
      dispatch({ type: UPDATE_TRACKING_ACTION, payload: type }),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
