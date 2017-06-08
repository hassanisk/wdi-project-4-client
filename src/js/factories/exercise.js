angular
.module('gymApp')
.factory('Exercise', Exercise);

Exercise.$inject = [];
function Exercise() {

  const all = [{
    // biceps ========== ========= biceps============================= biceps====================
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Hammer Curls',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://assets.menshealth.co.uk/main/thumbs/33032/incline-hammer-curl.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Zottman Curl',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_zottmancurl_0.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Wide-grip standing barbell curl',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://weighttrainingexercises4you.com/wp-content/uploads/Wide-Grip-Standing-Barbell-Curl.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'EZ Bar Curl',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://build-muscle-101.com/wp-content/uploads/2014/12/ez_curl.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Standing Concentration Curl',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'http://bodybuilding-wizard.com/wp-content/uploads/2014/04/dumbbell-concentration-curls-2-1-1.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Incline Inner-Biceps Curl.',
    desc: 'this is an awesome exercises',
    rep: '10*10*10',
    image: 'https://valleyfitnessnutrition.com/wp-content/uploads/2014/03/Incline-Inner-Biceps-Curl.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Biceps curls',
    desc: 'this is an Easy exercises',
    rep: '10*10*10',
    image: 'http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/hammer_cheat_curl_main.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Biceps preach',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'

  },{
    bodypart: '1',
    musclesname: 'Biceps',
    name: 'Biceps cable',
    desc: 'this is a Medium exercises',
    rep: '10*10*10*10',
    image: 'http://build-muscle-101.com/wp-content/uploads/2014/12/high-pulley-cable-curl-ex.jpg',
    level: 1,
    difficulty: 'Easy'

  },{
    // legs =================== legs============================= legs====================
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Squat',
    desc: 'This is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Hack Squat',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://www.exercisegoals.com/images/barbell-hack-squats.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Romanian Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'https://s3.amazonaws.com/musclemonsters/romanian+deadlift.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Front Squat.',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    musclesname: 'Legs',
    name: 'Dumbbell Lunges.',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Lunges_M_WorkoutLabs.png',
    level: 2,
    difficulty: 'Medium'
    // chest =================== chest============================= chest====================

  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    musclesname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    // abs =================== abs============================= abs====================
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    musclesname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
    // shoulder =================== shoulder============================= shoulder====================
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    musclesname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
      // tri =================== tri============================= tir====================
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'triceps extension',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Dumbbell Overhead Triceps Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.positivehealthwellness.com/wp-content/uploads/2016/06/Image-12-1.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Triceps Dip',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://www.elleman.vn/wp-content/uploads/2015/07/23/cac-bai-tap-the-duc-co-ban-wide-arm-dip.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Lying Triceps Extension (Skullcrusher)',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://bodybuilding-wizard.com/wp-content/uploads/2014/04/lying-triceps-extensions-skullcrushers.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Triceps Pushdown',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://robustclub.com/wp-content/uploads/2016/06/dhandle.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'V-Bar Pulldown',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://workoutlabs.com/wp-content/uploads/watermarked/V-Bar_Triangle_Bar_Lat_Pull_Downs.png',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    musclesname: 'Triceps',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
    //backk---------back----------
  }, {
    bodypart: '7',
    musclesname: 'Back',
    name: 'triceps extension',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Dumbbell Overhead Back Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.positivehealthwellness.com/wp-content/uploads/2017/07/Image-12-1.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Back Dip',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://www.elleman.vn/wp-content/uploads/2015/07/23/cac-bai-tap-the-duc-co-ban-wide-arm-dip.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Lying Back Extension (Skullcrusher)',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://bodybuilding-wizard.com/wp-content/uploads/2014/04/lying-triceps-extensions-skullcrushers.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Back Pushdown',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://robustclub.com/wp-content/uploads/2017/07/dhandle.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'V-Bar Pulldown',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://workoutlabs.com/wp-content/uploads/watermarked/V-Bar_Triangle_Bar_Lat_Pull_Downs.png',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    musclesname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  }];

  return {
    query() {
      return all;
    },
    get(id) {
      const exercise = all[id];
      console.log(exercise);
      return new Promise(resolve => {
        return resolve(exercise);
      });
    }
  };

}
