const chestExercises = [
  {
    name: "Bear Walk",
    type: "Chest Exercises",
    description:
      "Rest your weight on your palms and the balls of your feet not dissimilar to normal pushup position. Move by stepping with your R palm and L foot then your L palm and R foot. Basically walk like a lumbering bear. Move as fast as you can. Measure your reps in either distance.",
    info: "",
  },
  {
    name: "Bench Press",
    type: "Chest Exercises",
    description:
      "Lay down on a bench the bar should be directly above your eyes the knees are somewhat angled and the feet are firmly on the floor. Concentrate breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up. If you train with a high weight it is advisable to have a spotter that can help you up if you cant lift the weight on your own.",
    info: "",
  },
  {
    name: "Bench Press Dumbbells",
    type: "Chest Exercises",
    description:
      "The movement is very similar to bench pressing with a barbell however the weight is brought down to the chest at a lower point. Hold two dumbbells and lay down on a bench. Hold the weights next to the chest at the height of your nipples and press them up till the arms are stretched. Let the weight slowly and controlled down.",
    info: "",
  },
  {
    name: "Burpees",
    type: "Chest Exercises",
    description: "Jump, lay down on your chest do a pushup, then jump. Repeat",
    info: "",
  },
  {
    name: "Butterfly",
    type: "Chest Exercises",
    description:
      "Sit on the butterfly machine such that the feet have a good contact with the floor and the upper arms are parallel to the floor. Press your arms together till the handles are practically together but aren't. Go slowly back. The weights should stay all the time in the air.",
    info: "",
  },
  {
    name: "Butterfly Narrow Grip",
    type: "Chest Exercises",
    description:
      "The movement is the same as with a regular butterfly only that the grip is narrow. Sit on the butterfly machine such that the feet have a good contact with the floor and the upper arms are parallel to the floor. Press your arms together till the handles are practically together but aren't. Go slowly back. The weights should stay all the time in the air.",
    info: "",
  },
  {
    name: "Cable Cross-over",
    type: "Chest Exercises",
    description:
      "Begin with cables at about shoulder height one in each hand. Take a step forward so that one foot is in front of the other for stability and so that there is tension on the cables. Bring hands together in front of you. Try to make your hands overlap so that the cables cross a few inches.",
    info: "",
  },
  {
    name: "Cross-Bench Dumbbell Pullovers",
    type: "Chest Exercises",
    description:
      "Grasp a moderately weighted dumbbell so your palms are flat against the underside of the top plates and your thumbs are around the bar. Lie on your back across a flat bench so only your upper back and shoulders are in contact with the bench. Your feet should be set about shoulder-width apart and your head should hang slightly downward. With the dumbbell supported at arms length directly about your chest bend your arms about 15 degrees and keep them bent throughout the movement. Slowly lower the dumbbell backward and downward in a semicircle arc to as low a position as is comfortably possible. Raise it slowly back along the same arc to the starting point and repeat for the required number of repetitions.",
    info: "",
  },
  {
    name: "Decline Bench Press Barbell",
    type: "Chest Exercises",
    description:
      "Lay down on a decline bench with the bar should be directly above your eyes the knees are somewhat angled and the feet are firmly on the floor. Concentrate breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up.",
    info: "",
  },
  {
    name: "Decline Bench Press Dumbbell",
    type: "Chest Exercises",
    description:
      "Take two dumbbells and sit on a decline bench such that the feet are firmly on the floor and the head is resting on the bench. Hold the weights next to the chest at the height of your nipples and press them up till the arms are stretched. Let the weight slowly and controlled down.",
    info: "",
  },
  {
    name: "Decline Pushups",
    type: "Chest Exercises",
    description:
      "With your feet raised approximately 30cm on a platform, align your shoulders elbows and hands and then perform regular pushups. This emphasizes the clavicular fibers of the pectoralis major.",
    info: "",
  },
  {
    name: "Fly With Dumbbells",
    type: "Chest Exercises",
    description:
      "Take two dumbbells and lay on a bench make sure the feet are firmly on the ground and your back is not arched but has good contact with the bench. The arms are stretched in front of you about shoulder wide. Bend now the arms a bit and let them down with a half-circle movement to the side. Without changing the angle of the elbow bring them in a fluid movement back up.",
    info: "",
  },
  {
    name: "Fly With Dumbbells, Decline Bench",
    type: "Chest Exercises",
    description:
      "The exercise is the same as with a regular bench. Take two dumbbells and lay on a bench make sure the feet are firmly on the ground and your back is not arched but has good contact with the bench. The arms are stretched in front of you about shoulder wide. Bend now the arms a bit and let them down with a half-circle movement to the side. Without changing the angle of the elbow bring them in a fluid movement back up.",
    info: "",
  },
  {
    name: "Incline Bench Press",
    type: "Chest Exercises",
    description:
      "Lay down on a incline bench with the bar should be directly above your eyes and the knees are somewhat angled and the feet are firmly on the floor. Concentrate breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up.",
    info: "",
  },
  {
    name: "Incline Dumbbell Fly",
    type: "Chest Exercises",
    description:
      "Use inclined bench. Hold dumbbells straight out to your sides elbows slightly bent. Bring arms together above you keeping angle of elbows fixed.",
    info: "",
  },
  {
    name: "Incline Dumbbell Press",
    type: "Chest Exercises",
    description:
      "Bench should be angled anywhere from 30 to 45 degrees. Be sure to press dumbbells straight upward perpendicular to the floor",
    info: "",
  },
  {
    name: "Incline Pushups",
    type: "Chest Exercises",
    description: "Regular push up with a 30 degree incline.",
    info: "",
  },
  {
    name: "Isometric Wipers",
    type: "Chest Exercises",
    description:
      "Assume push-up position with hands slightly wider than shoulder width. Shift body weight as far as possible to one side allowing the elbow on that side to flex. Reverse the motion moving completely over to the other side. Return to the starting position and repeat for the desired number of repetitions.",
    info: "",
  },
  {
    name: "Pause Bench",
    type: "Chest Exercises",
    description:
      "Lower the bar to your chest and pause but do not rest there for 2 seconds. Press back up. Use the same weight you would on bench press but perform only single reps.",
    info: "",
  },
  {
    name: "Pushups",
    type: "Chest Exercises",
    description:
      "A push-up or press-up where the hands are wider than shoulders placing more emphasis on the pectoral muscles. Raise and lower the body using the arms push-ups exercise to target the pectoral muscles, triceps and anterior deltoids.",
    info: "",
  },
  {
    name: "Side to Side Push Ups",
    type: "Chest Exercises",
    description:
      "Start in push up position. Lean the body weight to the right side and complete a push up with the chest over the right hand. Come back to the centered position. On rep 2 lean to the left side",
    info: "",
  },
];
export default chestExercises;
