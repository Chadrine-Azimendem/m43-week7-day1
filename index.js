// console.log("Hello world");

// log the the argument vector to the console.
// console.log(process.argv); //the argument vector gives all the arguments that are passed in the comand line. The first 2 argument are always the node and the file's directory.

// if (process.argv[2] === "Harry") {
//   console.log("Hello Mr. Poter");
// }

function app(input) {
  switch (input[2]) {
    case "Harry":
      const name = input[2];
      console.log("Hello Mr. Poter");
      break;
    case "George":
      console.log("Hello Mr. Weasley");
      break;
    case "Hermione":
      console.log("Hello Ms. Grainger");
      break;
    default:
      console.log("Hello whoever you are");
      break;
  }
}

app(process.argv);
