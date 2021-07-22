import bcrypt from "bcryptjs";
const users = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("john1234", 10),
  },
  {
    name: "Harry Smith",
    email: "harry@gmail.com",
    password: bcrypt.hashSync("harry1234", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("jane1234", 10),
  },
  {
    name: "Sam Lewis",
    email: "sam@gmail.com",
    password: bcrypt.hashSync("sam1234", 10),
  },
];

export default users;
