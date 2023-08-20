const fs = require('fs');
require('dotenv').config();

//funcion pra traer todo el catalogo del JSON----------------->
const getMovies = async () => {
    const movies = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const allMovies = JSON.parse(movies)
    return allMovies
   
};
//funcion que busca del catalogo todas aquellas pelis o series y las filtra  siempre y cuando coincidan con el titulo que llega por params---------------->
const moviesByTitle = (title, allMovies) =>{
    console.log(allMovies)

    const matchMovies = allMovies.filter (m=>m.titulo?.toLowerCase().includes(title.toLowerCase()));

  
    return matchMovies;

};
    //------------------Necesito normalizar lo que veinee por params en el caso que usen acentos-------------------------//


    const normalizeString = (palabra) => {
        return palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };
    //funcion que busca del catalogo todas aquellas pelis o series que coinicdan con la categoria que veine por params (a laa vez usamos ela funcion para quitar acentos y de paso pasar a minuscula)---------------->

const moviesByCategory = (cat, allMovies) => {
    const normalizado = normalizeString(cat);
    const movies = allMovies.filter(m => normalizeString(m.categoria) === normalizado);
    return movies;
};














module.exports = {
    getMovies,
    moviesByTitle,
    moviesByCategory
}