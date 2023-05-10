import axios from "axios";

const ALL_DOGS = "ALL_DOGS";
const ALL_TEMPERAMENTS = "ALL_TEMPERAMENTS";
const FOUND_BREEDS = "FOUND_BREEDS";
const REMOVE_BREEDS = "REMOVE_BREEDS";
const FILTER_DOGS = "FILTER_DOGS";
const FILTER_SOURCE = "FILTER_SOURCE";
const REMOVE_FILTERS = "REMOVE_FILTERS";
const ORDER = "ORDER";
const DETAIL_DOG = "DETAIL_DOG";

function allDogs(dogs) {
  return {
    type: ALL_DOGS,
    payload: dogs,
  };
}

function allTemperaments(temperaments) {
  return {
    type: ALL_TEMPERAMENTS,
    payload: temperaments,
  };
}

function foundBreeds(dogs) {
  const endpoint = `http://localhost:3001/dogs?breed=${dogs}`;
  return async (dispatch) => {
    try {
      await axios.get(endpoint).then(({ data }) => {
        return dispatch({
          type: "FOUND_BREEDS",
          payload: data,
        });
      });
    } catch (error) {
      alert("No matches for your search");
      console.log(error.message);
    }
  };
}

function removeBreeds() {
  return {
    type: REMOVE_BREEDS,
  };
}

function filterDogs(filterCondition) {
  return {
    type: FILTER_DOGS,
    payload: filterCondition,
  };
}

function filterSource(filterCondition) {
  return {
    type: FILTER_SOURCE,
    payload: filterCondition,
  };
}

function removeFilters(unFilterCondition) {
  return {
    type: REMOVE_FILTERS,
    payload: unFilterCondition,
  };
}

function order(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
function detailDog(dog) {
  return {
    type: DETAIL_DOG,
    payload: dog,
  };
}

export {
  allDogs,
  ALL_DOGS,
  allTemperaments,
  ALL_TEMPERAMENTS,
  foundBreeds,
  FOUND_BREEDS,
  removeBreeds,
  REMOVE_BREEDS,
  filterDogs,
  FILTER_DOGS,
  filterSource,
  FILTER_SOURCE,
  removeFilters,
  REMOVE_FILTERS,
  order,
  ORDER,
  detailDog,
  DETAIL_DOG,
};
