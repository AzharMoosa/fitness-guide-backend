import axios from "axios";
import fs from "fs";

async function getCategory(exercise_type) {
  switch (exercise_type) {
    case "arm":
      return 8;
    case "chest":
      return 11;
    case "core":
      return 10;
    case "leg":
      return 9;
    case "shoulder":
      return 13;
    default:
      return -1;
  }
}

async function getResult() {
  let url = "https://wger.de/api/v2/exercise/";
  let pages = 20;
  let results = [];
  for (let i = 0; i < pages; i++) {
    const { data } = await axios.get(url);
    results = [...results, ...data.results];
    url = data.next;
  }
  return results;
}

async function getExercises(results, exercise_type) {
  fs.writeFileSync(
    `./data/exercise_list/${exercise_type}_exercises.js`,
    `const ${exercise_type}Exercises = [`
  );
  let category = await getCategory(exercise_type);
  for (let i = 0; i < results.length; i++) {
    const exercise = results[i];
    if (exercise.category == category && exercise.language == 2) {
      fs.appendFileSync(
        `./data/exercise_list/${exercise_type}_exercises.js`,
        `{
            name: "${exercise.name}",
            type: "${
              exercise_type.charAt(0).toUpperCase() + exercise_type.slice(1)
            } Exercises",
            description: "${exercise.description
              .replace("\n", " ")
              .replace("-", "- ")
              .replace(/(<([^>]+)>)/gi, "")
              .replace(/([^a-z0-9 ._-]+)/gi, "")}",
            info: "",
          },`
      );
    }
  }
  fs.appendFileSync(
    `./data/exercise_list/${exercise_type}_exercises.js`,
    `];  export default ${exercise_type}Exercises;`
  );
}

async function retrieveExercises() {
  const exerciseTypes = ["arm", "chest", "core", "leg", "shoulder"];
  const results = await getResult();
  for (let i = 0; i < exerciseTypes.length; i++) {
    const type = exerciseTypes[i];
    await getExercises(results, type);
  }
}

retrieveExercises();
