const fs = require('fs');
require('dotenv').config();


const getMovies = async () => {
    const movies = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const allMovies = JSON.parse(movies)
    return allMovies
   
};














module.exports = {
    getMovies
}