const{Schema,model}= require('mongoose');

const ViviendaSchema= new Schema({
    tipo:{ type: String, required: true},
    zona: {type: String, required: true},
    direccion: {type: String, required: true},
    ndormitorios:{type: Number, required: true},
    precio: {type: Number, required: true},
    tamaño:{type: Number},
    extras:[{type: String, required: false}]
});

module.exports= model("Vivienda", ViviendaSchema);