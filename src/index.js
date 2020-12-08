const app= require('./server');
const puerto= app.get("port");

require("./database");

app.listen(puerto,()=>{
    console.log("Servidor en ", puerto);
})