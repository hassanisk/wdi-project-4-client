// angular
//   .module('gymApp')
//   .factory('Exercise', Exercise);
//
// Exercise.$inject = [];
// function Exercise() {
//   const all = [
//       { bodypart: 'biceps',
//       name: 'biceps curls',
//       desc: 'this is an easy exercises',
//       rep: '10*10*10',
//       image: 'http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/hammer_cheat_curl_main.jpg',
//       level: 1
//     },
//     {
//       bodypart: 'biceps',
//       name: 'biceps preach',
//       desc: 'this is a hard exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 2
//     },
//     {
//       bodypart: 'biceps',
//       name: 'biceps cable',
//       desc: 'this is a medium exercises',
//       rep: '10*10*10*10',
//       image: 'http://build-muscle-101.com/wp-content/uploads/2014/12/high-pulley-cable-curl-ex.jpg',
//       level: 2
//     },
//     {
//       bodypart: 'legs',
//       name: 'squat',
//       desc: 'this is a hard exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 3
//     },
//     {
//       bodypart: 'legs',
//       name: 'deadlift',
//       desc: 'this is a hard exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 3
//     },
//     {
//       bodypart: 'chest',
//       name: 'bench press',
//       desc: 'this is a hard exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 4
//     },
//     {
//       bodypart: 'abs',
//       name: 'crunches',
//       desc: 'this is a easy exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 4
//     },
//     {
//       bodypart: 'abs',
//       name: 'crunches',
//       desc: 'this is a easy exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 1
//     },
//     {
//       bodypart: 'shoulder',
//       name: 'shoulder press',
//       desc: 'this is a easy exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 3
//     },
//     {
//       bodypart: 'triceps',
//       name: 'triceps extension',
//       desc: 'this is a easy exercises',
//       rep: '10*10*10*10',
//       image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
//       level: 2
//     }
//   ];
//   return {
//     query() {
//       return all;
//     },
//     get(params) {
//       return all.find((el) => {
//         return Object.keys(params).every((key) => {
//           return params[key] === el[key];
//         });
//       });
//     }
//   };
// }
