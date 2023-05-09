import {
  ALL_DOGS,
  ALL_TEMPERAMENTS,
  FOUND_BREEDS,
  REMOVE_BREEDS,
  FILTER_DOGS,
  FILTER_SOURCE,
  REMOVE_FILTERS,
  ORDER,
} from "./actions";

const initialState = {
  allDogs: [],
  allTemperaments: [],
  foundBreeds: [],
  parametersToFilter: [],
  filteredDogs: [],
  addDog: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };

    case ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };

    case FOUND_BREEDS:
      return {
        ...state,
        parametersToFilter: [],
        filteredDogs: [],
        foundBreeds: action.payload,
      };

    case REMOVE_BREEDS:
      return {
        ...state,
        foundBreeds: [],
      };

    case FILTER_DOGS:
      return {
        ...state,
        foundBreeds: [],
        parametersToFilter: [...state.parametersToFilter, action.payload],
        filteredDogs: [
          ...state.filteredDogs.filter(
            (dog) =>
              dog.temperament &&
              !dog.temperament
                .toLowerCase()
                .includes(action.payload.toLowerCase())
          ),
          ...state.allDogs.filter(
            (dog) =>
              dog.temperament &&
              dog.temperament
                .toLowerCase()
                .includes(action.payload.toLowerCase())
          ),
        ],
      };

    case FILTER_SOURCE:
      if (action.payload === "createdAt") {
        return {
          ...state,
          foundBreeds: [],
          parametersToFilter: [...state.parametersToFilter, action.payload],
          filteredDogs: [
            ...state.filteredDogs.filter(
              (dog) => dog[action.payload] === undefined && dog
            ),
            ...state.allDogs.filter(
              (dog) => dog[action.payload] !== undefined && dog
            ),
          ],
        };
      } else if (action.payload === "fromAPI") {
        return {
          ...state,
          foundBreeds: [],
          parametersToFilter: [...state.parametersToFilter, action.payload],
          filteredDogs: [
            ...state.filteredDogs.filter(
              (dog) => dog.createdAt !== undefined && dog
            ),
            ...state.allDogs.filter(
              (dog) => dog.createdAt === undefined && dog
            ),
          ],
        };
      }
      break;
    case REMOVE_FILTERS:
      if (
        action.payload &&
        action.payload !== "createdAt" &&
        action.payload !== "fromAPI"
      ) {
        return {
          ...state,
          parametersToFilter: [
            ...state.parametersToFilter.filter(
              (temp) =>
                !temp.toLowerCase().includes(action.payload.toLowerCase())
            ),
          ],
          filteredDogs: [
            ...state.filteredDogs.filter((dog) => {
              let stays = false;
              [
                ...state.parametersToFilter.filter(
                  (temp) =>
                    !temp.toLowerCase().includes(action.payload.toLowerCase())
                ),
              ].forEach((temp) => {
                if (dog.temperament.includes(temp)) {
                  stays = true;
                }
              });
              return stays && dog;
            }),
          ],
        };
      } else if (action.payload === "createdAt") {
        return {
          ...state,
          parametersToFilter: [
            ...state.parametersToFilter.filter(
              (source) => source !== action.payload && source
            ),
          ],
          filteredDogs: [
            ...state.filteredDogs.filter(
              (dog) => dog[action.payload] === undefined && dog
            ),
          ],
        };
      } else if (action.payload === "fromAPI") {
        return {
          ...state,
          parametersToFilter: [
            ...state.parametersToFilter.filter(
              (source) => source !== action.payload && source
            ),
          ],
          filteredDogs: [
            ...state.filteredDogs.filter(
              (dog) => dog.createdAt !== undefined && dog
            ),
          ],
        };
      } else {
        return { ...state, parametersToFilter: [], filteredDogs: [] };
      }

    case ORDER:
      const sortBreedA = (breed) => (a, b) => {
        if (a[breed] < b[breed]) {
          return -1;
        } else if (a[breed] > b[breed]) {
          return 1;
        }
        return 0;
      };
      const sortBreedD = (breed) => (a, b) => {
        if (a[breed] > b[breed]) {
          return -1;
        } else if (a[breed] < b[breed]) {
          return 1;
        }
        return 0;
      };
      const sortWeightA = (weight) => (a, b) => {
        const aSplit = a[weight]?.includes("NaN")
          ? 100
          : +a[weight]?.split(" ")[0];
        const bSplit = b[weight]?.includes("NaN")
          ? 101
          : +b[weight]?.split(" ")[0];
        const aSplit2 = a[weight]?.includes("NaN")
          ? 100
          : +a[weight]?.split(" ")[2];
        const bSplit2 = b[weight]?.includes("NaN")
          ? 101
          : +b[weight]?.split(" ")[2];
        if (aSplit < bSplit) {
          return -1;
        } else if (aSplit > bSplit) {
          return 1;
        } else if (aSplit2 < bSplit2) {
          return -1;
        } else if (aSplit2 > bSplit2) {
          return 1;
        }
        return 0;
      };
      const sortWeightD = (weight) => (a, b) => {
        const aSplit = a[weight]?.includes("NaN")
          ? 100
          : +a[weight]?.split(" ")[0];
        const bSplit = b[weight]?.includes("NaN")
          ? 101
          : +b[weight]?.split(" ")[0];
        const aSplit2 = a[weight]?.includes("NaN")
          ? 100
          : +a[weight]?.split(" ")[2];
        const bSplit2 = b[weight]?.includes("NaN")
          ? 101
          : +b[weight]?.split(" ")[2];
        if (aSplit > bSplit) {
          return -1;
        } else if (aSplit < bSplit) {
          return 1;
        } else if (aSplit2 > bSplit2) {
          return -1;
        } else if (aSplit2 < bSplit2) {
          return 1;
        }
        return 0;
      };
      if (action.payload === "BA") {
        return {
          ...state,
          allDogs: state.allDogs.sort(sortBreedA("breed")),
          filteredDogs: state.filteredDogs.sort(sortBreedA("breed")),
        };
      } else if (action.payload === "BD") {
        return {
          ...state,
          allDogs: state.allDogs.sort(sortBreedD("breed")),
          filteredDogs: state.filteredDogs.sort(sortBreedD("breed")),
        };
      } else if (action.payload === "WA") {
        return {
          ...state,
          allDogs: state.allDogs.sort(sortWeightA("weight")),
          filteredDogs: state.filteredDogs.sort(sortWeightA("weight")),
        };
      } else if (action.payload === "WD") {
        return {
          ...state,
          allDogs: state.allDogs.sort(sortWeightD("weight")),
          filteredDogs: state.filteredDogs.sort(sortWeightD("weight")),
        };
      }
      break;

    default:
      return { ...state };
  }
};

export default rootReducer;
