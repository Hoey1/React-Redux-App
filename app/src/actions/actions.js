import axios from "axios";

export const FETCH_CLASSES = "FETCH_CLASSES";
export const ROLL_STATS = "ROLL_STATS";

export const fetchClasses = () => (dispatch) => {
  dispatch({ type: FETCH_CLASSES });
  axios
    .get("http://dnd5eapi.co/api/classes")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "FETCH_CLASSES_SUCCESS", payload: res.data.results });
    })
    .catch((err) => {
      dispatch({ type: "FETCH_CLASSES_FAIL", payload: err });
    });
};

export const rollStats = (stats) => {
  return {
    type: ROLL_STATS,
    payload: stats,
  };
};
