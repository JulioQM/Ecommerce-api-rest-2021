const { db } = require("../cnn");
//Listar Roles
const getRoles = async (req, res) => {
    try {
        const response = await db.any("select * from Rol order by idrol desc;");
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Listar Roles por ID
const getRolesByID = async (req, res) => {
    try {
        const idrol = parseInt(req.params.id)
        const response = await db.any("select * from Rol WHERE idrol=$1 ;", [idrol]);
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Crear Roles
const createRol = async (req, res) => {
    const { idrol, rol,estado } = req.body;
    try {
        const response = await db.query("INSERT INTO Rol(idrol, rol,estado) VALUES ($1, $2,$3);", [idrol, rol,estado]);
        res.json({
            message: `Rol Creado con ID: ${idrol}`,
            body: {
                Rol: { idrol, rol,estado }
            }
        })
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Eliminar Roles
const deleteRol = async (req, res) => {
    try {
        const idrol = parseInt(req.params.id)
        const response = await db.query("DELETE FROM Rol where idrol=$1;", [idrol]);

        res.json(
            `Rol eliminado con ID: ${idrol}`)
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }

}
//Actualizar  Roles
const updateRol = async (req, res) => {
    try {
        const idrol = parseInt(req.params.id)
        const { rol ,estado} = req.body;
        const response = await db.query("UPDATE Rol set rol=$1 ,estado=$2 where idrol=$3 ;", [rol,estado, idrol]);

        res.json({
            message: `Rol Actualizado con ID: ${idrol}`,
            body: {
                Rol: { idrol, rol ,estado}
            }
        })
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}



module.exports = {
    getRoles,
    getRolesByID,
    createRol,
    deleteRol,
    updateRol
}