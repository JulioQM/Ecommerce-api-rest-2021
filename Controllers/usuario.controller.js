const { db } = require("../cnn")

const getUsuarios = async (req, res) => {
    try {
        const response = await db.any("select * from usuario order by idusuario desc;")
        res.json(response)
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Listar Usuarios por ID
const getUsuarioByID = async (req, res) => {
    try {
        const idusuario = parseInt(req.params.id)
        const response = await db.any("select * from usuario WHERE idusuario=$1 ;", [idusuario]);
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}


const createUsuario = async (req, res) => {
    try {
        const { idusuario, idrol, nombre, correo, usuario, clave, estatus } = req.body;

        const response = await db.query("INSERT INTO Usuario(idusuario, idrol, nombre ,correo, usuario, clave,estatus) VALUES ($1, $2, $3, $4 ,$5, $6 ,$7);", [idusuario, idrol, nombre, correo, usuario, clave, estatus]);
        res.json({
            message: `Usuario Creado con ID: ${idusuario}`,
            body: {
                Usuario: { idusuario, idrol, nombre, correo, usuario, clave, estatus }
            }
        })
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Eliminar Usuarios
const deleteUsuario = async (req, res) => {
    try {
        const idusuario = parseInt(req.params.id)
        const response = await db.query("UPDATE Usuario set estatus=$1 where idusuario=$2 ;", [0, idusuario]);

        res.json(
            `Usuario eliminado con ID: ${idusuario}`)
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }

}
//Actualizar  Usuario
const updateUsuario = async (req, res) => {
    try {
        const idusuario = parseInt(req.params.id)
        const { idrol, nombre, correo, usuario, clave, estatus } = req.body;
        const response = await db.query("UPDATE Usuario set idrol=$1,nombre=$2,correo=$3,usuario=$4,clave=$5,estatus=$6 where idusuario=$7 ;", [idrol, nombre, correo, usuario, clave, estatus, idusuario]);

        res.json({
            message: `Usuario Actualizado con ID: ${idusuario}`,
            body: {
                Usuario: { idusuario, idrol, nombre, correo, usuario, clave, estatus }
            }
        })
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}

//login usuario
const loginUsuario = async (req, res) => {
    try {
        // const usuario = (req.params.usuario)
        const {usuario} = (req.params)
        const {clave} = (req.params)
        // const response = await db.any("select * from usuario WHERE usuario=$1;", [usuario]);
        const response = await db.any("SELECT * FROM usuario WHERE usuario=$1 AND clave=$2 AND estatus=1;", [usuario,clave])
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}



module.exports = {
    getUsuarios,
    getUsuarioByID,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    loginUsuario

}