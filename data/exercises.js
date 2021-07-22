import armExercises from "./exercise_list/arm_exercises.js";
import shoulderExercises from "./exercise_list/shoulder_exercises.js";
import chestExercises from "./exercise_list/chest_exercises.js";
import coreExercises from "./exercise_list/core_exercises.js";
import legExercises from "./exercise_list/leg_exercises.js";

const exercises = [
  ...armExercises,
  ...shoulderExercises,
  ...chestExercises,
  ...coreExercises,
  ...legExercises,
];

export default exercises;
