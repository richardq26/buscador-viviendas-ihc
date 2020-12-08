const{Router}=require("express");
const router= Router();
const{cargarViviendas, buscarViviendas, renderIndex,renderRespuesta}= require("../controllers/index.controller.js");
//ENDPOINTS PARA ESPECIALIDAD---------------------------------
//cargar las primeras especialidades a la base de datos
router.post('/cargarviviendas',cargarViviendas);
router.post('/buscarvivienda',buscarViviendas)


router.get("/",renderIndex);
//router.get("/respuesta",renderRespuesta);


module.exports=router;