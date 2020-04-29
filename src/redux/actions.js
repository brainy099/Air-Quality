import { actionTypes } from "./types";

const setData = (data) => ({
  type: actionTypes.SET_DATA,
  payload: data,
});

export const fetchFromApi = () => async (dispatch) => {
  const apikey = "579b464db66ec23bdd000001a6c1ba5a69a94c3276afccf95a717f41";
  try {
    let response = await fetch(
      `https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${apikey}&format=json&offset=0&limit=3000`
    );
    let data = await response.json();
    await dispatch(setData(data));
  } catch (err) {
    console.log(err);
  }
};
