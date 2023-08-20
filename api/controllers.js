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

  //funcion que busca del catalogo todas aquellas pelis o series que coincida el id que viene por params con el id de la peli y luego ene l handler devuelva su trailer en el caso de haber uno---- Fallaba, faltaba parsear el id que veine ya que se envia comom string y no coincide con el numero del catalogo---------------->
const movieById= (id, allMovies)=>{
    const movieId = parseInt(id); 
    return allMovies.find(m => m.id === movieId);
}

//funcion que busca del catalogo todas aquellas pelis o series que coincida el id que viene por params con el id de la peli y luego ene l handler devuelva su trailer en el caso de haber uno---- Fallaba, faltaba parsear el id que veine ya que se envia comom string y no coincide con el numero del catalogo---------------->
const moviesByActor= (act, allMovies)=>{
    const actorNormalizado= normalizeString(act);
    return allMovies.filter(m => {
        return (normalizeString(m.reparto)).includes(actorNormalizado);
        
    });
}









module.exports = {
    getMovies,
    moviesByTitle,
    moviesByCategory,
    movieById,
    moviesByActor
}