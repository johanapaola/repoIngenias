const fs = require('fs');
require('dotenv').config();


const getMovies = async () => {
    const movies = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const allMovies = JSON.parse(movies)
    return allMovies
   
};

const moviesByTitle = (title, allMovies) =>{
    console.log(allMovies)

    const matchMovies = allMovies.filter (m=>m.titulo?.toLowerCase().includes(title.toLowerCase()));

  
    return matchMovies;
};















module.exports = {
    getMovies,
    moviesByTitle
}