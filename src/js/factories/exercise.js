angular
.module('gymApp')
.factory('Exercise', Exercise);

Exercise.$inject = [];
function Exercise() {

  const all = [{
    // biceps ========== ========= biceps============================= biceps====================
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Standing Bicep Curl',
    desc: 'The standing bicep curl exercise is the quintessential barbell bicep exercise, You perform it by holding the barbell with your hands at normal shoulder length away from each other.',
    rep: '8*8*8',
    image: 'http://www.bicep-exercises.com/exercises/barbell/images/barbell-bicep-exercises-1.gif',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Standing Bicep Curl using Close Grip',
    desc: 'The standing bicep curl using a close grip exercise is a variant of the standard bicep curl exercise listed above. The difference here is that you hold the barbell with your hands closer from each other than a normal shoulder width in order to exercise the outside portion of your biceps',
    rep: '8*8*8',
    image: 'http://www.bicep-exercises.com/exercises/barbell/images/barbell-bicep-exercises-2.gif',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Standing Concentrated Bicep Curl using Close Grip',
    desc: 'In order to do this exercise you will need to sit on a bench, tilt your upper body forward and hold the dumbbell with your hands close to each other (i.e. close grip) with your elbows resting against the sides of your knees.',
    rep: '8*8*8',
    image: 'http://www.bicep-exercises.com/exercises/barbell/images/barbell-bicep-exercises-3.gif',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Prone Bicep Curl',
    desc: 'For the prone bicep curl exercise you will need a high bench that has enough clearance underneath to allow you to hold the barbell down at arms-length while you are lying prone without it touching the ground.',
    rep: '10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/barbell/images/barbell-bicep-exercises-4.gif',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Prone Bicep Curl using Close Grip',
    desc: 'The close grip is a variant of the previous exercise in which you place your hands closer to each other than you normally would.',
    rep: '10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/barbell/images/barbell-bicep-exercises-5.gif',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Standing One at a Time Bicep Curl',
    desc: 'The standing bicep curl exercise detailed here is performed using one dumbbell at a time',
    rep: '10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-1.gif',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Standing Inner Bicep Curl',
    desc: 'tIt is performed by raising the dumbbells up and slightly away from your upper arms, rather than straight up towards your shoulders as you normally would.',
    rep: '10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-3.gif',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Standing Bicep Curl',
    desc: 'You perform it by raising both dumbbells up at the same time along the sides of your body.',
    rep: '10*10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-4.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Standing Hammer Curl',
    desc: 'The standing hammer curl is very similar to the standing bicep curl except for the fact that you hold both dumbbells with your hands facing each other throughout, or in other words while using a neutral grip.',
    rep: '10*10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-5.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Seated Alternated Bicep Curl',
    desc: 'The seated alternated bicep curl is done by sitting on a bench and holding one dumbbell in each hand.',
    rep: '10*10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-6.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Seated Bicep Curl',
    desc: 'The seated bicep curl is very similar to the previous except for the fact you are raising and lowering both dumbbells at the same time.',
    rep: '10*10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-7.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Seated Incline Bicep Bench Curl',
    desc: 'The seated incline bicep bench curl bicep exercise is performed using an incline bench and holding one dumbbell in each hand.',
    rep: '10*10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-8.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Concentration Bicep Curl',
    desc: 'The concentration bicep curl exercise is different in that you use the incline back rest of a bench to act as a preacher arm rest on which you rest your upper arm.',
    rep: '12*12*12*12',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-9.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Seated Inner Bicep Curl',
    desc: 'The seated incur bicep curl bicep exercise is performed by sitting on a bench and holding one dumbbell in each hand.',
    rep: '12*12*12*12',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-10.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Seated Concentration Curl',
    desc: 'The seated concentration curl bicep exercise is done by resting the elbow holding a dumbbell against your knee while sitting down on a bench.',
    rep: '12*12*12*12',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-11.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Seated Isolated Bicep Curl',
    desc: 'The seated isolated bicep curl is very similar to the one detailed above, with your elbow resting against your knee while sitting on a bench.',
    rep: '12*12*12*12',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-12.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Preacher Bicep Curl using Neutral Grip',
    desc: 'The preacher bicep curl using a neutral grip bicep exercise is different from the one above in that your palms face each other rather than both facing up.',
    rep: '12*12*12*12',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-14.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Prone Alternated Bicep Curl',
    desc: 'The prone alternated bicep curl exercise is achieved with you lying prone on top of a high bench with enough clearance below to allow your arms to extend down while holding dumbbells.',
    rep: '12*12*12*12',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-15.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Supine Bicep Curl',
    desc: 'Finally, the supine bicep curl has you lying on your back on top of a flat bench.',
    rep: '10*10*10*10',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-16.gif',
    level: 3,
    difficulty: 'Hard'

  },{
    bodypart: '1',
    muscelsname: 'Biceps',
    name: 'Supine Bicep Curl',
    desc: 'Finally, the supine bicep curl has you lying on your back on top of a flat bench.',
    rep: '8*8*8',
    image: 'http://www.bicep-exercises.com/exercises/dumbbells/images/dumbbells-bicep-exercises-16.gif',
    level: 1,
    difficulty: 'Easy'

  },{
    // legs =================== legs============================= legs====================
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Squat',
    desc: 'This is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Hack Squat',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://www.exercisegoals.com/images/barbell-hack-squats.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Romanian Deadlift',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'https://s3.amazonaws.com/musclemonsters/romanian+deadlift.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Front Squat.',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Savage!'
  },{
    bodypart: '2',
    muscelsname: 'Legs',
    name: 'Dumbbell Lunges.',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://workoutlabs.com/wp-content/uploads/watermarked/Dumbbell_Lunges_M_WorkoutLabs.png',
    level: 2,
    difficulty: 'Medium'
    // chest =================== chest============================= chest====================

  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '3',
    muscelsname: 'Chest',
    name: 'Bench Press',
    desc: 'this is a Hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    // abs =================== abs============================= abs====================
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode'
  },{
    bodypart: '4',
    muscelsname: 'Abs',
    name: 'crunches',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
    // shoulder =================== shoulder============================= shoulder====================
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 2,
    difficulty: 'Medium'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '5',
    muscelsname: 'Delts',
    name: 'shoulder press',
    desc: 'this is a Easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
      // tri =================== tri============================= tir====================
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Incline Tricep Extension',
    desc: 'The incline tricep extension exercise has you lying on your back on an incline bench.',
    rep: '8*8*8',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Standing Tricep Extension',
    desc: 'The standing tricep extension is slightly different in that you can perform it without using a workout bench.',
    rep: '8*8*8',
    image: 'http://tricep-exercises.com/exercises/barbell/images/barbell-tricep-exercises-2.gif',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Seated Tricep Extension',
    desc: 'You will perform the seated tricep extension exercise by sitting on one end of any flat workout bench',
    rep: '8*8*8',
    image: 'http://tricep-exercises.com/exercises/barbell/images/barbell-tricep-exercises-3.gif',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Lying Tricep Extension to Forehead',
    desc: 'The lying tricep extension exercise has you lying on your back on top of a flat bench.',
    rep: '8*8*8',
    image: 'http://tricep-exercises.com/exercises/barbell/images/barbell-tricep-exercises-4.gif',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Lying Tricep Extension to Chin',
    desc: 'However, you will lower the barbell towards your chin rather than your forehead, all the while keeping your upper arms vertical to the floor throughout.',
    rep: '10*10*10',
    image: 'http://tricep-exercises.com/exercises/barbell/images/barbell-tricep-exercises-5.gif',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Lying Tricep Extension Kick-Back',
    desc: 'The difference here however is that you keep your upper arms parallel to the floor rather than perpendicular (or vertical) to it.',
    rep: '10*10*10',
    image: 'http://tricep-exercises.com/exercises/barbell/images/barbell-tricep-exercises-6.gif',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Reverse Bench Press',
    desc: 'Lastly, the reverse bench press is an excellent tricep exercise in which you lie on your back on a flat bench. ',
    rep: '10*10*10',
    image: 'http://tricep-exercises.com/exercises/barbell/images/barbell-tricep-exercises-7.gif',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Tricep Extension using Two Arms',
    desc: 'The tricep extension is performed here using a single dumbbell, held with both hands on top and behind your head.',
    rep: '10*10*10',
    image: 'http://tricep-exercises.com/exercises/dumbbells/images/dumbbells-tricep-exercises-1.gif',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Tricep Extension using One Arm',
    desc: 'The variant of the dumbbell tricep extension exercise presented here is performed using one arm at a time.',
    rep: '10*10*10*10',
    image: 'http://tricep-exercises.com/exercises/dumbbells/images/dumbbells-tricep-exercises-2.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Seated Tricep Extension',
    desc: 'The dumbbell tricep extension is performed here in a sitting position, on top of a flat workout bench.',
    rep: '10*10*10*10',
    image: 'http://tricep-exercises.com/exercises/dumbbells/images/dumbbells-tricep-exercises-3.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Tricep Kickback',
    desc: 'The tricep kick back exercise is a different kind of tricep exercise in which you kneel down on one knee on top of a workout bench.',
    rep: '10*10*10*10',
    image: 'http://tricep-exercises.com/exercises/dumbbells/images/dumbbells-tricep-exercises-4.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Bent-Over Tricep Extension using One Arm',
    desc: 'The bent-over tricep extension is similar to the tricep kick back but is well suited for those that cant kneel on top of a workout bench at all',
    rep: '10*10*10*10',
    image: 'http://tricep-exercises.com/exercises/dumbbells/images/dumbbells-tricep-exercises-5.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Lying Tricep Extension',
    desc: 'The lying tricep extension is similar to the other tricep extension exercises listed above but in this case you are lying on your back on top of a workout bench.',
    rep: '10*10*10*10',
    image: 'http://tricep-exercises.com/exercises/dumbbells/images/dumbbells-tricep-exercises-6.gif',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Tricep Bench Press',
    desc: 'Finally, the tricep bench press is a variant of the typical bench press chest exercise.',
    rep: '12*12*12*12',
    image: 'http://tricep-exercises.com/exercises/dumbbells/images/dumbbells-tricep-exercises-7.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Tricep Extension',
    desc: 'The classic tricep extension is performed here using an exercise ball, in which you pretty much perform a push-up with your hands resting on top of the ball.',
    rep: '12*12*12*12',
    image: 'http://tricep-exercises.com/exercises/ball/images/ball-tricep-exercises-1.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Standing Tricep Extension',
    desc: 'The standing tricep extension exercise is different in that you are standing up and pressing the exercise ball against the wall, as opposed to laying your hands on top of it.',
    rep: '12*12*12*12',
    image: 'http://tricep-exercises.com/exercises/ball/images/ball-tricep-exercises-2.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Weighted Tricep Extension',
    desc: 'Finally, the weighted tricep extension has you using a pair of dumbbells as you are lying on your back on top of the exercise ball.',
    rep: '12*12*12*12',
    image: 'http://tricep-exercises.com/exercises/ball/images/ball-tricep-exercises-3.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Tricep Extension',
    desc: 'The traditional tricep extension exercise is performed here using a gym-type machine.',
    rep: '12*12*12*12',
    image: 'http://tricep-exercises.com/exercises/gym/images/gym-tricep-exercises-1.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Low Pulley Tricep Extension',
    desc: 'The low pulley tricep extension is performed using a low pulley station with the rope attachment, although handles can be used as well.',
    rep: '12*12*12*12',
    image: 'http://tricep-exercises.com/exercises/gym/images/gym-tricep-exercises-2.gif',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '6',
    muscelsname: 'Triceps',
    name: 'Low Pulley Tricep Extension while Lying',
    desc: 'The lying low pulley tricep extension is performed with you lying on your back on a workout bench or on the floor in front of the low pulley station.',
    rep: '12*12*12*12',
    image: 'http://tricep-exercises.com/exercises/gym/images/gym-tricep-exercises-3.gif',
    level: 4,
    difficulty: 'Beast Mode!'
    //backk---------back----------
  }, {
    bodypart: '7',
    muscelsname: 'Back',
    name: 'triceps extension',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Dumbbell Overhead Back Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.positivehealthwellness.com/wp-content/uploads/2017/07/Image-12-1.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Back Dip',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://www.elleman.vn/wp-content/uploads/2015/07/23/cac-bai-tap-the-duc-co-ban-wide-arm-dip.jpg',
    level: 1,
    difficulty: 'Easy'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Lying Back Extension (Skullcrusher)',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://bodybuilding-wizard.com/wp-content/uploads/2014/04/lying-triceps-extensions-skullcrushers.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Back Pushdown',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://robustclub.com/wp-content/uploads/2017/07/dhandle.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'V-Bar Pulldown',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'http://workoutlabs.com/wp-content/uploads/watermarked/V-Bar_Triangle_Bar_Lat_Pull_Downs.png',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 2,
    difficulty: 'Medium!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 3,
    difficulty: 'Hard'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
    name: 'Close-Grip Bench Press.',
    desc: 'this is a Easy exercises',
    rep: '5 sets of 12 reps',
    image: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/l/23_2.jpg',
    level: 4,
    difficulty: 'Beast Mode!'
  },{
    bodypart: '7',
    muscelsname: 'Back',
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
