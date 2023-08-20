
const express = require('express');
const router = express.Router();

const {getMovies, moviesByTitle, moviesByCategory, movieById, moviesByActor} = require("../controllers")



router.get('/catalogo',async(req, res) => {

 //que liste todo el contenido de trailerflix JSON
 try {
   const movies = await getMovies();
   res.status(200).json(movies); 
 } catch (error) {
   res.status(400).json({error:error.message})
 }
 
});


router.get('/titulo/:title', async (req, res) => {
 //que liste el catálogo de películas y/o series que se aproxime al título enviado. (la búsqueda del nombre debe ser parcial)
 try {
  const allMovies = await getMovies();
//  console.log(allMovies)
 const { title } = req.params
 const movie = moviesByTitle( title, allMovies);
 movie?res.status(200).json(movie) : res.status(400).json({ error: `No se encontró película o serie con el nombre ${title}`});
 } catch (error) {
  res.status(400).json({error:error.message})
 }
 
  
 
 
});

router.get('/categoria/:cat', async (req, res) => {
   //que liste todo el contenido del archivo JSON de acuerdo a la categoría enviada como parámetro (serie o película)
  try {
    const allMovies = await getMovies();
    const { cat } = req.params;
    const moviesCategories = moviesByCategory( cat, allMovies);
    moviesCategories?res.status(200).json(moviesCategories) : res.status(400).json({ error:`No se encontraron películas o series en la categoría ${cat}`});
  } catch (error) {
    res.status(400).json({error:error.message})
  } 
   
});

router.get('/trailer/:id', async(req, res) => {
   // que retorne la URL del trailer de la película o serie. Si ésta no posee video asociado, que retorne un mensaje en formato JSON notificando la no disponibilidad del mismo.
   try {
    const allMovies = await getMovies();
    const { id } = req.params;
    const movie = movieById(id, allMovies);

    movie && movie.trailer? 
      res.status(200).json({ trailerUrl: movie.trailer })
      :res.status(400).json({ error: "No se ha ecnontrado tráiler para esta peli o serie" });
    
  } catch (error) {
    res.status(400).json({error:error.message})
  } 
});

router.get('/reparto/:act', async (req, res) => {
    //que liste el catálogo que incluya a la actriz o actor indicado por el nombre. (la búsqueda del nombre debe ser parcial)
const allMovies = await getMovies();
    try{
    const {act} = req.params
    const moviesActor = moviesByActor(act, allMovies);
    moviesActor? res.status(200).json(moviesActor):
    res.status(404).json({ error: `No se han encontradp pelis o series con el actor${act}` })
  
} catch (error) {
    res.status(400).json({ error: error.message });
}
});




module.exports = router;