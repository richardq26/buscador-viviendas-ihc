const indexCtrl = {};
const Vivienda = require("../models/vivienda");

indexCtrl.cargarViviendas = async (req, res) => {
  const viv1 = new Vivienda({
    tipo: "Casa",
    zona: "Centro",
    direccion: "Centro de lima",
    ndormitorios: "2",
    precio: "150000",
    tamaño: "93",
  });
  const viv2 = new Vivienda({
    tipo: "Piso",
    zona: "Macarena",
    direccion: "Jiron Macarena 56",
    ndormitorios: "3",
    precio: "165000",
    tamaño: "83",
  });
  const viv3 = new Vivienda({
    tipo: "Piso",
    zona: "Nervion",
    direccion: "Alameda Nervion 123",
    ndormitorios: "2",
    precio: "205000",
    tamaño: "80",
    extras: ["Garaje"],
  });
  const viv4 = new Vivienda({
    tipo: "Piso",
    zona: "Nervion",
    direccion: "Alameda Nervion 321",
    ndormitorios: "2",
    precio: "215000",
    tamaño: "89",
    extras: ["Garaje"],
  });
  const viv5 = new Vivienda({
    tipo: "Piso",
    zona: "Nervion",
    direccion: "Alameda Nervion 124",
    ndormitorios: "2",
    precio: "215000",
    tamaño: "85",
    extras: ["Garaje"],
  });
  const viv6 = new Vivienda({
    tipo: "Adosado",
    zona: "Aljarafe",
    direccion: "Parque Aljarafe 561",
    ndormitorios: "4",
    precio: "300000",
    tamaño: "130",
    extras: ["Piscina", "Jardin", "Garaje"],
  });
  const viv7 = new Vivienda({
    tipo: "Piso",
    zona: "Nervion",
    direccion: "Alameda Nervion 125",
    ndormitorios: "4",
    precio: "360000",
    tamaño: "125",
    extras: ["Garaje"],
  });
  const viv8 = new Vivienda({
    tipo: "Piso",
    zona: "Nervion",
    direccion: "Alameda Nervion 126",
    ndormitorios: "3",
    precio: "375000",
    tamaño: "130",
    extras: ["Garaje"],
  });
  const viv9 = new Vivienda({
    tipo: "Piso",
    zona: "Nervion",
    direccion: "Alameda Nervion 385",
    ndormitorios: "3",
    precio: "385000",
    tamaño: "145",
    extras: ["Garaje"],
  });
  const viv10 = new Vivienda({
    tipo: "Chalet",
    zona: "Aljarafe",
    direccion: "Parque Aljarafe 189",
    ndormitorios: "3",
    precio: "400000",
    tamaño: "143",
    extras: ["Piscina", "Jardin", "Garaje"],
  });
  const viv11 = new Vivienda({
    tipo: "Chalet",
    zona: "Aljarafe",
    direccion: "Parque Aljarafe 156",
    ndormitorios: "3",
    precio: "405000",
    tamaño: "145",
    extras: ["Piscina", "Jardin", "Garaje"],
  });
  const viv12 = new Vivienda({
    tipo: "Chalet",
    zona: "Aljarafe",
    direccion: "Parque Aljarafe 235",
    ndormitorios: "4",
    precio: "425000",
    tamaño: "175",
    extras: ["Piscina", "Jardin", "Garaje"],
  });
  const viv13 = new Vivienda({
    tipo: "Chalet",
    zona: "Aljarafe",
    direccion: "Parque Aljarafe 231",
    ndormitorios: "4",
    precio: "430000",
    tamaño: "170",
    extras: ["Piscina", "Jardin", "Garaje"],
  });
  const viv14 = new Vivienda({
    tipo: "Chalet",
    zona: "Aljarafe",
    direccion: "Parque Aljarafe 145",
    ndormitorios: "4",
    precio: "450000",
    tamaño: "180",
    extras: ["Piscina", "Jardin", "Garaje"],
  });
  const viv15 = new Vivienda({
    tipo: "Piso",
    zona: "Nervion",
    direccion: "Alameda Nervion 231",
    ndormitorios: "4",
    precio: "455000",
    tamaño: "165",
    extras: ["Garaje"],
  });

  viv1.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv2.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv3.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv4.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv5.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv6.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv7.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv8.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv9.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv10.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv11.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv12.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv13.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv14.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });
  viv15.save((err) => {
    if (err) throw err;
    else console.log("Vivienda 1 cargada");
  });

  res.json({
    success: true,
    msg: "Viviendas cargadas",
  });
};

indexCtrl.buscarViviendas = async (req, res) => {
  try {
    var hasta = (req.body.precio % 1000) * 1000;
    var desde = parseInt(req.body.precio / 1000) * 1000;
    console.log("desde: "+desde + "hasta"+hasta);
    var extra= req.body.extra;
    var extra1= req.body.extra1;
    var extra2= req.body.extra2;
    var extra3= req.body.extra3;
    let enviar =[];
    await Vivienda.find(
      {
        tipo: req.body.tipo,
        ndormitorios: req.body.ndormitorios,
        zona: req.body.zona,
        precio: { $gt: desde-1, $lt: hasta+1 }
      },
      async (err, viviendaencontrada) => {
        try {
          if (viviendaencontrada[0] == null) {
            req.flash("error_msg", "No se encontró una vivienda de estas características");
            res.redirect("/");
          }
          else{
            viviendaencontrada.forEach(element => {
              if(element.extras.indexOf(extra)>-1 || element.extras.indexOf(extra1)>-1 || element.extras.indexOf(extra2)>-1 || element.extras.indexOf(extra3)> -1){
                enviar.push(element);
              }else{
                console.log("Sin coincidencias");
              }
            });
            
            res.render("respuesta/respuesta", {enviar});
            
          }
        } catch (err) {
          res.json({ msg: "ERROR LOKOP" });
        }
      }
    ).lean();
  } catch (err) {
    res.json({ msg: "Error desde el async" });
  }
};

indexCtrl.renderIndex = (req, res) => {
  res.render("busqueda");
};

module.exports = indexCtrl;
