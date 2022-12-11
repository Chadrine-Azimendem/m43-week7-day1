const Movie = require("./utils/index");

const myArgs = process.argv.slice(3);

function app(input) {
  switch (input[2]) {
    case "add":
      // create a new instance of the class Movie.
      const newMovie = new Movie(input[3], input[4], input[5], input[6]);
      // add the newMovie to the movieArr through the add() method of the Movie object.
      newMovie.add();

      // const movie = [input[3], input[4]];
      // //don't use template literal because it converts the output to a string but we want an array.
      // console.log("Your movie is", movie);
      break;

    case "Harry":
      // const myArgs = process.argv.slice(2);
      console.log("Hello Mr. Poter");
      break;
    // Task:
    case "addMany":
      let jsonInput = JSON.parse(myArgs);

      for (let i = 0; i < jsonInput.length; i++) {
        let obj = jsonInput[i];
        // console.log(obj);
        const newMovie = new Movie(
          obj.title,
          obj.actor,
          obj.director,
          obj.rating
        );
        i === jsonInput.length - 1 ? newMovie.add(true) : newMovie.add(false);
      }
      break;
    default:
      console.log("Hello whoever you are");
      break;
  }
}

app(process.argv);
