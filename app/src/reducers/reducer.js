import { FETCH_CLASSES, ROLL_STATS } from "../actions/actions";

const stateShape = {
  classes: [],
  error: "",
  isFetching: false,
  character: {
    class: "",
    race: "",
    stats: [],
  },
};

export const reducer = (state = stateShape, action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case "FETCH_CLASSES_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        classes: action.payload,
        isFetching: false,
        error: "",
      };
    case "FETCH_CLASSES_FAIL":
      return {
        ...state,
        error: action.payload,
      };
    case ROLL_STATS:
      console.log(action.payload);
      return {
        ...state,
        character: {
          ...state.character,
          stats: action.payload,
        },
      };
    default:
      return state;
  }
};
