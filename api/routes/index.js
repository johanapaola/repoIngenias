
const express = require('express');
const router = express.Router();



router.get('/catalogo', (req, res) => {
 //que liste todo el contenido de trailerflix JSON
});
router.get('/titulo/:title', (req, res) => {
 //que liste el catálogo de películas y/o series que se aproxime al título enviado. (la búsqueda del nombre debe ser parcial)
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