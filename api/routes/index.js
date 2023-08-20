
const express = require('express');
const router = express.Router();

const {getMovies, moviesByTitle} = require("../controllers")



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
 movie?res.status(200).json(movie) : res.status(400).json({ error: "No se encontró película o serie con ese  nombre"});
 } catch (error) {
  res.status(400).json({error:error.message})
 }
 
  
 
 
});

router.get('/categoria/:cat', (req, res) => {
   //que liste todo el contenido del archivo JSON de acuerdo a la categoría enviada como parámetro (serie o película)
});

router.get('/trailer/:id', (req, res) => {
   // que retorne la URL del trailer de la película o serie. Si ésta no posee video asociado, que retorne un mensaje en formato JSON notificando la no disponibilidad del mismo.
});

router.get('/reparto/:act', (req, res) => {
    //que liste el catálogo que incluya a la actriz o actor indicado por el nombre. (la búsqueda del nombre debe ser parcial)
});




module.exports = router;