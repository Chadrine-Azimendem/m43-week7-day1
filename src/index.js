// import the Movie class
const Movie = require("./utils");

function app(input) {
  switch (input[2]) {
    case "add":
      // create a new instance of the class Movie.
      const newMovie = new Movie(input[3], input[4], input[5], input[6]);

      // add the newMovie to the movieArr through the add() method of the Movie object.
      newMovie.add();

      //   const movie = [input[3], input[4]];
      //   //don't use template literal because it converts the output to a string but we want an array.
      //   console.log("Your movie is", movie);
      break;
    case "Harry":
      console.log("Hello Mr. Poter");
      break;
    default:
      console.log("Hello whoever you are");
      break;
  }
}

app(process.argv);

// Task:
