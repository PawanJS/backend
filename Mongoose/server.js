const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect("mongodb://localhost:27017/movieApp")
    .then(() => {
      console.log("Mongoose connected!");
    })
    .catch((err) => console.log("Oh no Error!"));
}

const movieSchema = new mongoose.Schema({
  name: String,
  year: Number,
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

Movie.insertMany([
  { name: "RRR", year: 2022, rating: 9.3 },
  { name: "Vikram", year: 2022, rating: 9.6 },
  { name: "KGF 2", year: 2022, rating: 9.9 },
  { name: "Jai Bhim", year: 2021, rating: 9.7 },
]).then(() => console.log("Done"));
 