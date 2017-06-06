angular
.module('gymApp')
.factory('Exercise', Exercise);

Exercise.$inject = [];
function Exercise() {
  const all = [{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'biceps curls',
    desc: 'this is an easy exercises',
    rep: '10*10*10',
    image: 'http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/hammer_cheat_curl_main.jpg',
    level: 1,
    difficulty: 'easy'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'biceps preach',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'hard'

  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'biceps cable',
    desc: 'this is a medium exercises',
    rep: '10*10*10*10',
    image: 'http://build-muscle-101.com/wp-content/uploads/2014/12/high-pulley-cable-curl-ex.jpg',
    level: 2,
    difficulty: 'medium'

  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'squat',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'hard'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'deadlift',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'easy'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'bench press',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'medium'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'easy'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'hard'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'hard'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'triceps extension',
    desc: 'this is a easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'savage'
  }];
  return {
    query() {
      return all;
    }
  };
}
