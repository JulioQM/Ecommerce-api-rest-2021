const { connection } = require("../cnn")

const getUsuarios = async (req, res) => {
    connection.query('SELECT * FROM usuario', function (error, result) {
        if (error)
            throw error;        
        res.send(result);        
    });  
    
}
//Listar Usuarios por ID
const getUsuarioByID = async (req, res) => {
    const id = parseInt(req.params.id)   
    connection.query("select * from usuario WHERE idusuario=? ;", [id], function (error, result) {
        if (error)
            throw error;        
        res.send(result);        
    });
}
//Crear Usuarios
const createUsuario = async (req, res) => {
    const { idusuario, idrol, nombre, correo, usuario, clave, estatus } = req.body;

    const response = await db.query("INSERT INTO Usuario(idusuario, idrol, nombre ,correo, usuario, clave,estatus) VALUES ($1, $2, $3, $4 ,$5, $6 ,$7);", [idusuario, idrol, nombre, correo, usuario, clave, estatus]);
    res.json({
        message: `Usuario Creado con ID: ${idusuario}`,
        body: {
            Usuario: { idusuario, idrol, nombre, correo, usuario, clave, estatus }
        }
    })
}
//Eliminar Usuarios
const deleteUsuario = async (req, res) => {
    const id = parseInt(req.params.id)
    const response = await db.query("UPDATE Usuario set estatus=$1 where idusuario=$2 ;", [0, id]);

    res.json(
        `Usuario eliminado con ID: ${id}`)

}
//Actualizar  Usuario
const updateUsuario = async (req, res) => {
    const idusuario = parseInt(req.params.id)
    const { idrol, nombre, correo, usuario, clave, estatus } = req.body;
    const response = await db.query("UPDATE Usuario set idrol=$1,nombre=$2,correo=$3,usuario=$4,clave=$5,estatus=$6 where idusuario=$7 ;", [idrol, nombre, correo, usuario, clave, estatus, idusuario]);

    res.json({
        message: `Usuario Actualizado con ID: ${idusuario}`,
        body: {
            Usuario: { idusuario, idrol, nombre, correo, usuario, clave, estatus }
        }
    })
}



module.exports = {
    getUsuarios,
    getUsuarioByID,
    createUsuario,
    deleteUsuario,
    updateUsuario

}