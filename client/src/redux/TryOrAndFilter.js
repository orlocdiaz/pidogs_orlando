//! MAKE SURE TO ADD THE filteredDogsAnd in dogs where needed

// import {
//   ALL_DOGS,
//   ALL_TEMPERAMENTS,
//   FOUND_BREEDS,
//   REMOVE_BREEDS,
//   FILTER_DOGS,
//   FILTER_SOURCE,
//   REMOVE_FILTERS,
//   ORDER,
// } from "./actions";

// const initialState = {
//   allDogs: [],
//   allTemperaments: [],
//   foundBreeds: [],
//   parametersToFilter: [],
//   filterSource: [],
//   filteredDogsAnd: [],
//   filteredDogs: [],
//   addDog: [],
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ALL_DOGS:
//       return {
//         ...state,
//         allDogs: action.payload,
//       };

//     case ALL_TEMPERAMENTS:
//       return {
//         ...state,
//         allTemperaments: action.payload,
//       };

//     case FOUND_BREEDS:
//       return {
//         ...state,
//         parametersToFilter: [],
//         filteredDogs: [],
//         foundBreeds: action.payload,
//       };

//     case REMOVE_BREEDS:
//       return {
//         ...state,
//         foundBreeds: [],
//       };

//     case FILTER_DOGS:
//       if (state.filteredDogs.length) {
//         return {
//           ...state,
//           foundBreeds: [],
//           parametersToFilter: [...state.parametersToFilter, action.payload],
//           filteredDogsAnd: [
//             ...state.filteredDogs.filter((dog) => {
//               if (
//                 [...state.parametersToFilter, action.payload].every(
//                   (parameter) => dog.temperament.includes(parameter)
//                 )
//               )
//                 return dog;
//             }),
//             ...state.filteredDogsAnd.filter((dog) => {
//               if (
//                 [...state.parametersToFilter, action.payload].every(
//                   (parameter) => dog.temperament.includes(parameter)
//                 )
//               )
//                 return dog;
//             }),
//           ],
//           filteredDogs: [
//             ...state.filteredDogs.filter(
//               (dog) =>
//                 dog.temperament &&
//                 !dog.temperament
//                   .toLowerCase()
//                   .includes(action.payload.toLowerCase())
//             ),
//             ...state.allDogs.filter((dog) => {
//               if (
//                 dog.temperament &&
//                 [...state.filteredDogsAnd].find(
//                   (dogAnd) => dogAnd.breed !== dog.breed
//                 )
//               ) {
//                 return dog.temperament
//                   .toLowerCase()
//                   .includes(action.payload.toLowerCase());
//               }
//             }),
//           ],
//         };
//       }
//       return {
//         ...state,
//         foundBreeds: [],
//         parametersToFilter: [...state.parametersToFilter, action.payload],
//         /* filteredDogsAnd: [
//           ...state.filteredDogs.filter((dog) =>
//             dog.temperament.toLowerCase().includes(action.payload.toLowerCase())
//           ),
//         ], */
//         // filteredDogsAnd: [],
//         filteredDogs: [
//           ...state.filteredDogs.filter(
//             (dog) =>
//               dog.temperament &&
//               !dog.temperament
//                 .toLowerCase()
//                 .includes(action.payload.toLowerCase())
//           ),
//           ...state.allDogs.filter(
//             (dog) =>
//               dog.temperament &&
//               dog.temperament
//                 .toLowerCase()
//                 .includes(action.payload.toLowerCase())
//           ),
//         ],
//       };

//     case FILTER_SOURCE:
//       if (action.payload === "createdAt") {
//         if (state.filteredDogs.length) {
//           return {
//             ...state,
//             foundBreeds: [],
//             filterSource: [...state.filterSource, action.payload],
//             filteredDogsAnd: [
//               ...[
//                 ...state.filteredDogs.filter(
//                   (dog) => dog[action.payload] === undefined && dog
//                 ),
//                 ...state.allDogs.filter((dog) => {
//                   // dog[action.payload] !== undefined && dog
//                   if (
//                     dog[action.payload] &&
//                     [...state.filteredDogsAnd].find(
//                       (dogAnd) => dogAnd.breed !== dog.breed
//                     )
//                   ) {
//                     return dog;
//                   }
//                 }),
//               ].filter((dog) => dog[action.payload] !== undefined && dog),
//               ...state.filteredDogsAnd.filter(
//                 (dog) => dog[action.payload] !== undefined && dog
//               ),
//             ],
//             filteredDogs: [
//               ...state.filteredDogs.filter(
//                 (dog) => dog[action.payload] === undefined && dog
//               ),
//               ...state.allDogs.filter((dog) => {
//                 // dog[action.payload] !== undefined && dog
//                 if (
//                   dog[action.payload] &&
//                   [...state.filteredDogsAnd].find(
//                     (dogAnd) => dogAnd.breed !== dog.breed
//                   )
//                 ) {
//                   return dog;
//                 }
//               }),
//             ],
//           };
//         }
//         return {
//           ...state,
//           foundBreeds: [],
//           filterSource: [...state.filterSource, action.payload],
//           filteredDogs: [
//             ...state.filteredDogs.filter(
//               (dog) => dog[action.payload] === undefined && dog
//             ),
//             ...state.allDogs.filter(
//               (dog) => dog[action.payload] !== undefined && dog
//             ),
//           ],
//           filteredDogsAnd: [
//             ...state.filteredDogs.filter(
//               (dog) => dog[action.payload] === undefined && dog
//             ),
//             ...state.allDogs.filter(
//               (dog) => dog[action.payload] !== undefined && dog
//             ),
//           ],
//         };
//       } else if (action.payload === "fromAPI") {
//         if (state.filteredDogs.length) {
//           return {
//             ...state,
//             foundBreeds: [],
//             filterSource: [...state.filterSource, action.payload],
//             /*             filteredDogsAnd: [
//               ...state.filteredDogs.filter(
//                 (dog) => dog[action.payload] !== undefined && dog
//               ),
//             ], */

//             filteredDogs: [
//               ...state.filteredDogs.filter(
//                 (dog) => dog[action.payload] === undefined && dog
//               ),
//               ...state.allDogs.filter((dog) => {
//                 // dog[action.payload] !== undefined && dog
//                 if (
//                   dog[action.payload] &&
//                   [...state.filteredDogsAnd].find(
//                     (dogAnd) => dogAnd.breed !== dog.breed
//                   )
//                 ) {
//                   return dog;
//                 }
//               }),
//             ],

//             filteredDogsAnd: [
//               ...[
//                 ...state.filteredDogs.filter(
//                   (dog) => dog[action.payload] === undefined && dog
//                 ),
//                 ...state.allDogs.filter((dog) => {
//                   // dog[action.payload] !== undefined && dog
//                   if (
//                     dog[action.payload] &&
//                     [...state.filteredDogsAnd].find(
//                       (dogAnd) => dogAnd.breed !== dog.breed
//                     )
//                   ) {
//                     return dog;
//                   }
//                 }),
//               ].filter((dog) => dog.createdAt === undefined && dog),
//               ...state.filteredDogsAnd.filter(
//                 (dog) => dog.createdAt === undefined && dog
//               ),
//             ],
//           };
//         }

//         return {
//           ...state,
//           foundBreeds: [],
//           filterSource: [...state.filterSource, action.payload],
//           filteredDogs: [
//             ...state.filteredDogs.filter(
//               (dog) => dog.createdAt !== undefined && dog
//             ),
//             ...state.allDogs.filter(
//               (dog) => dog.createdAt === undefined && dog
//             ),
//           ],
//         };
//       }
//       break;
//     case REMOVE_FILTERS:
//       if (
//         action.payload &&
//         action.payload !== "createdAt" &&
//         action.payload !== "fromAPI"
//       ) {
//         return {
//           ...state,
//           parametersToFilter: [
//             ...state.parametersToFilter.filter(
//               (temp) =>
//                 !temp.toLowerCase().includes(action.payload.toLowerCase())
//             ),
//           ],
//           filteredDogsAnd: [
//             ...state.filteredDogsAnd.filter((dog) => {
//               let stays = false;
//               if (
//                 [
//                   ...state.parametersToFilter.filter(
//                     (temp) =>
//                       !temp.toLowerCase().includes(action.payload.toLowerCase())
//                   ),
//                 ].length >= 2
//               ) {
//                 [
//                   ...state.parametersToFilter.filter(
//                     (temp) =>
//                       !temp.toLowerCase().includes(action.payload.toLowerCase())
//                   ),
//                 ].forEach((temp) => {
//                   if (dog.temperament.includes(temp)) {
//                     stays = true;
//                   }
//                 });
//                 return stays && dog;
//               } else {
//                 return;
//               }
//             }),
//           ],
//           filteredDogs: [
//             ...state.filteredDogs.filter((dog) => {
//               let stays = false;
//               [
//                 ...state.parametersToFilter.filter(
//                   (temp) =>
//                     !temp.toLowerCase().includes(action.payload.toLowerCase())
//                 ),
//               ].forEach((temp) => {
//                 if (dog.temperament.includes(temp)) {
//                   stays = true;
//                 }
//               });
//               return stays && dog;
//             }),
//           ],
//         };
//       } else if (action.payload === "createdAt") {
//         return {
//           ...state,
//           filterSource: [
//             ...state.filterSource.filter(
//               (source) => source !== action.payload && source
//             ),
//           ],
//           filteredDogsAnd: [
//             ...state.filteredDogsAnd.filter(
//               (dog) => dog[action.payload] === undefined && dog
//             ),
//           ],
//           filteredDogs: [
//             ...state.filteredDogs.filter(
//               (dog) => dog[action.payload] === undefined && dog
//             ),
//           ],
//         };
//       } else if (action.payload === "fromAPI") {
//         return {
//           ...state,
//           filterSource: [
//             ...state.filterSource.filter(
//               (source) => source !== action.payload && source
//             ),
//           ],
//           filteredDogsAnd: [
//             ...state.filteredDogsAnd.filter(
//               (dog) => dog.createdAt !== undefined && dog
//             ),
//           ],
//           filteredDogs: [
//             ...state.filteredDogs.filter(
//               (dog) => dog.createdAt !== undefined && dog
//             ),
//           ],
//         };
//       } else {
//         return {
//           ...state,
//           parametersToFilter: [],
//           dilterSource: [],
//           filteredDogs: [],
//           filteredDogsAnd: [],
//         };
//       }

//     case ORDER:
//       const sortBreedA = (breed) => (a, b) => {
//         if (a[breed] < b[breed]) {
//           return -1;
//         } else if (a[breed] > b[breed]) {
//           return 1;
//         }
//         return 0;
//       };
//       const sortBreedD = (breed) => (a, b) => {
//         if (a[breed] > b[breed]) {
//           return -1;
//         } else if (a[breed] < b[breed]) {
//           return 1;
//         }
//         return 0;
//       };
//       const sortWeightA = (weight) => (a, b) => {
//         const aSplit = a[weight]?.includes("NaN")
//           ? 100
//           : +a[weight]?.split(" ")[0];
//         const bSplit = b[weight]?.includes("NaN")
//           ? 101
//           : +b[weight]?.split(" ")[0];
//         const aSplit2 = a[weight]?.includes("NaN")
//           ? 100
//           : +a[weight]?.split(" ")[2];
//         const bSplit2 = b[weight]?.includes("NaN")
//           ? 101
//           : +b[weight]?.split(" ")[2];
//         if (aSplit < bSplit) {
//           return -1;
//         } else if (aSplit > bSplit) {
//           return 1;
//         } else if (aSplit2 < bSplit2) {
//           return -1;
//         } else if (aSplit2 > bSplit2) {
//           return 1;
//         }
//         return 0;
//       };
//       const sortWeightD = (weight) => (a, b) => {
//         const aSplit = a[weight]?.includes("NaN")
//           ? 100
//           : +a[weight]?.split(" ")[0];
//         const bSplit = b[weight]?.includes("NaN")
//           ? 101
//           : +b[weight]?.split(" ")[0];
//         const aSplit2 = a[weight]?.includes("NaN")
//           ? 100
//           : +a[weight]?.split(" ")[2];
//         const bSplit2 = b[weight]?.includes("NaN")
//           ? 101
//           : +b[weight]?.split(" ")[2];
//         if (aSplit > bSplit) {
//           return -1;
//         } else if (aSplit < bSplit) {
//           return 1;
//         } else if (aSplit2 > bSplit2) {
//           return -1;
//         } else if (aSplit2 < bSplit2) {
//           return 1;
//         }
//         return 0;
//       };
//       if (action.payload === "BA") {
//         return {
//           ...state,
//           allDogs: state.allDogs.sort(sortBreedA("breed")),
//           filteredDogs: state.filteredDogs.sort(sortBreedA("breed")),
//         };
//       } else if (action.payload === "BD") {
//         return {
//           ...state,
//           allDogs: state.allDogs.sort(sortBreedD("breed")),
//           filteredDogs: state.filteredDogs.sort(sortBreedD("breed")),
//         };
//       } else if (action.payload === "WA") {
//         return {
//           ...state,
//           allDogs: state.allDogs.sort(sortWeightA("weight")),
//           filteredDogs: state.filteredDogs.sort(sortWeightA("weight")),
//         };
//       } else if (action.payload === "WD") {
//         return {
//           ...state,
//           allDogs: state.allDogs.sort(sortWeightD("weight")),
//           filteredDogs: state.filteredDogs.sort(sortWeightD("weight")),
//         };
//       }
//       break;

//     default:
//       return { ...state };
//   }
// };

// export default rootReducer;
