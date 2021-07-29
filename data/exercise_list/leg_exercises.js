const legExercises = [
  {
    name: "Back Squat",
    type: "Leg Exercises",
    description:
      "Place a barbell in a rack just below shoulder-height. Dip under the bar to put it behind the neck across the top of the back and grip the bar with the hands wider than shoulder-width apart. Lift the chest up and squeeze the shoulder blades together to keep the straight back throughout the entire movement. Stand up to bring the bar off the rack and step backwards then place the feet so that they are a little wider than shoulder-width apart. Sit back into hips and keep the back straight and the chest up squatting down so the hips are below the knees. From the bottom of the squat, press feet into the ground and push hips forward to return to the top of the standing position.",
    info: "",
  },
  {
    name: "Barbell Hack Squats",
    type: "Leg Exercises",
    description: "Perform leg squats with barbell behind your legs",
    info: "",
  },
  {
    name: "Barbell Lunges",
    type: "Leg Exercises",
    description:
      "Put barbell on the back of your shoulders. Stand upright then take the first step forward. Step should bring you forward so that your supporting legs knee can touch the floor. Then stand back up and repeat with the other leg. Remember to keep good posture.",
    info: "",
  },
  {
    name: "Braced Squat",
    type: "Leg Exercises",
    description:
      "Stand with feet slightly wider than shoulder-width apart while standing as tall as you can. Grab a weight plate and hold it out in front of your body with arms straight out. Keep your core tight and stand with a natural arch in your back. Now push hips back and bend knees down into a squat as far as you can. Hold for a few moments and bring yourself back up to the starting position.",
    info: "",
  },
  {
    name: "Dumbbell Goblet Squat",
    type: "Leg Exercises",
    description:
      "Grasp dumbbell with both hands at the sides of the upper plates. Hold dumbbell in front of chest close to torso. Place feet about shoulder-width apart keep knees slightly bent. Squat down until thighs are parallel to floor. Keep back straight bend and move hips backward to keep knees above feet. Return keep knees slightly flexed. Repeat. Keep bodyweight on heels and look ahead or slightly above to keep back straight.",
    info: "",
  },
  {
    name: "Dumbbell Lunges Walking",
    type: "Leg Exercises",
    description:
      "Take two dumbbells in your hands stand straight feet about shoulder wide. Take one long step so that the front knee is approximately forming a right angle. The back leg is stretched so that the knee is low but doesn't touch the ground. Complete the step by standing up and repeat the movement with the other leg.",
    info: "",
  },
  {
    name: "Forward Lunge",
    type: "Leg Exercises",
    description:
      "Start at a standing position. Lift and move one foot forward until your front calf and thigh are at 90 degrees to one another. At the same time bend your back leg forward while keeping the back foot in place. Return to starting position. Repeat with other leg.",
    info: "",
  },
  {
    name: "Front Squats",
    type: "Leg Exercises",
    description:
      "Place barbell in front of you. Sit back into hips and keep the back straight and the chest up squatting down so the hips are below the knees. From the bottom of the squat, press feet into the ground and push hips forward to return to the top of the standing position.",
    info: "",
  },
  {
    name: "Glute Bridge",
    type: "Leg Exercises",
    description:
      "Lie on you back with your hips and knees flexed feet on the ground. From this position raise your butt off of the ground to a height where your body makes a straight line from your knees to your shoulders. To make the exercise more intense you can add weight by letting a barbell rest on your hips as you complete the motion or you can put your feet on a slightly higher surface such as a step or a bench.",
    info: "",
  },
  {
    name: "Good Mornings",
    type: "Leg Exercises",
    description: "",
    info: "",
  },
  {
    name: "High Knee Jumps",
    type: "Leg Exercises",
    description:
      "Start with legs slightly wider than shoulder width. Drop into a bodyweight squat. As you hit the bottom of the squat explode upwards into a jump while simultaneously tucking your knees into your chest mid-flight. Remain tucked until the apex of your jump. Land on both feet making sure your knees are not locked so as to avoid excessive strain upon your joints. Collect yourself into the next rep as quickly but under control as possible.",
    info: "",
  },
  {
    name: "High Knees",
    type: "Leg Exercises",
    description:
      "Start with legs at a comfortable standing width. Run in place bringing knees to or above waist level",
    info: "",
  },
  {
    name: "Hindu Squats",
    type: "Leg Exercises",
    description:
      "Start with your feet shoulder width apart and arms slightly behind your back. As you descend towards the floor, raise your heels off the ground while keeping your back as vertical as possible. Upon attaining the bottom position touch the hands to the heels. Then stand up ending with the heels on the ground arms extended in front of the chest then rowing into the start position.",
    info: "",
  },
  {
    name: "Hip Thrust",
    type: "Leg Exercises",
    description:
      "The bar should go directly on your upper thigh directly below your crotch. Your feet should be directly under your knees. Push your hips up so that you form a straight line from your knees to your shoulders. Use a pad for comfort.",
    info: "",
  },
  {
    name: "Kettlebell Swings",
    type: "Leg Exercises",
    description:
      "Hold the kettle-bell securely in both hands. Keep your back flat throughout the move avoiding any rounding of the spine. Keeping your knees soft hinge your hips backwards letting the kettle-bell swing between your knees. You want to bend from the hips as far as you can without letting your back round forwards. Then snap your hips forwards quickly and standing up straight locking your body in an upright posture. The speed you do this will cause your arms and the kettle-bell to swing up in front of you. Don't try to lift the kettle-bell with your arms. The snapping forwards of your hips will cause the kettle-bell to swing forwards through momentum. Depending on the weight of the kettle-bell and the speed of your hip movement your arms will swing up to about shoulder height. At the top of this swing let your hips hinge backwards again as the kettle-bell swings back down to between your legs and the start of the next repetition.",
    info: "",
  },
  {
    name: "Leg Curl",
    type: "Leg Exercises",
    description:
      "The leg curl also known as the hamstring curl is an isolation exercise that targets the hamstring muscles.",
    info: "",
  },
  {
    name: "Leg Curls (laying)",
    type: "Leg Exercises",
    description:
      "Lay on a bench and put your calves behind the leg holder. It is better if they are hold on around the lower calves. Hold a grip on the bars to make sure the body is firmly in place. Bend your legs bringing the weight up go slowly back. During the exercise the body should not move all work is done by the legs.",
    info: "",
  },
  {
    name: "Leg Extension",
    type: "Leg Exercises",
    description:
      "The leg extension is a resistance weight training exercise that targets the quadriceps muscle in the legs. The exercise is done using a machine called the Leg Extension Machine.",
    info: "",
  },
  {
    name: "Leg Press",
    type: "Leg Exercises",
    description:
      "The leg press is a weight training exercise in which the individual pushes a weight or resistance away from them using their legs.",
    info: "",
  },
  {
    name: "Leg Presses (narrow)",
    type: "Leg Exercises",
    description:
      "The exercise is very similar to the wide leg press. Sit on the machine and put your feet on the platform so far apart that you could just put another foot in between them. The feet are parallel and point up. Lower the weight so much that the knees form a right angle. Push immediately the platform up again without any pause. When in the lower position the knees point a bit outwards and the movement should be always fluid.",
    info: "",
  },
  {
    name: "Leg Presses (wide)",
    type: "Leg Exercises",
    description:
      "Sit on the machine and put your feet on the platform a bit more than shoulder wide. The feet are turned outwards by a few degrees. Lower the weight so much that the knees form a right angle. Push immediately the platform up again without any pause. When in the lower position the knees point a bit outwards and the movement should be always fluid.",
    info: "",
  },
  {
    name: "Low Box Squat - Wide Stance",
    type: "Leg Exercises",
    description:
      "Unrack the bar and set your stance wide beyond your hips. Push your hips back and sit down to a box that takes you below parallel. Sit completely down do not touch and go. Then explosively stand up. Stay tight in your upper back and torso throughout the movement.",
    info: "",
  },
  {
    name: "Pistol Squat",
    type: "Leg Exercises",
    description: "Perform a squat with one leg",
    info: "",
  },
  {
    name: "Romanian Deadlift",
    type: "Leg Exercises",
    description:
      "Keep legs straight and lower body, while keeping your back straight. Return to standing position.",
    info: "",
  },
  {
    name: "Speed Deadlift",
    type: "Leg Exercises",
    description: "Deadlift with short 1 min rest between sets.",
    info: "",
  },
  {
    name: "Squat Thrust",
    type: "Leg Exercises",
    description:
      "Begin in a standing position. Move into a squat position with your hands on the ground. Kick your feet back into a plank position while keeping your arms extended. Immediately return your feet into squat position. Stand up from the squat position count 4",
    info: "",
  },
  {
    name: "Sumo Deadlift",
    type: "Leg Exercises",
    description:
      "Begin with a bar loaded on the ground. Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders inside the legs and you can use a pronated grip, a mixed grip or hook grip. Relax the shoulders which in effect lengthens your arms. Take a breath and then lower your hips looking forward with your head with your chest up. Drive through the floor spreading your feet apart with your weight on the back half of your feet. Extend through the hips and knees. As the bar passes through the knees lean back and drive the hips into the bar pulling your shoulder blades together. Return the weight to the ground by bending at the hips and controlling the weight on the way down.",
    info: "",
  },
  {
    name: "Sumo Squats",
    type: "Leg Exercises",
    description:
      "Stand with your feet wider than your shoulders with your toes pointed out at a 45 degree angle and barbell on your shoulder. While keeping your back straight descend slowly by bending at the knees and hips as if you are sitting down squatting. Lower yourself until your quadriceps and hamstrings are parallel to the floor. Return to the starting position by pressing upwards and extending your legs while maintaining an equal distribution of weight on your forefoot and heel.",
    info: "",
  },
  {
    name: "Thruster",
    type: "Leg Exercises",
    description:
      "Start by doing a front squat. At the top position push the bar above your head similar to a press. Lower the bar to the shoulders",
    info: "",
  },
];
export default legExercises;
