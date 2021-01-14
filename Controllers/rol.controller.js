const { db } = require("../cnn");
//Listar Roles
const getRoles = async (req, res) => {
    const response = await db.any("select * from Rol order by idrol desc;");
    res.json(response);
}
//Listar Roles por ID
const getRolesByID = async (req, res) => {
    const id = parseInt(req.params.id)
    const response = await db.any("select * from Rol WHERE idrol=$1 ;", [id]);
    res.json(response);
}
//Crear Roles
const createRol = async (req, res) => {
    const { idrol, rol } = req.body;

    const response = await db.query("INSERT INTO Rol(idrol, rol) VALUES ($1, $2);", [idrol, rol]);
    res.json({
        message: `Rol Creado con ID: ${id}`,
        body: {
            Rol: { idrol, rol }
        }
    })
}
//Eliminar Roles
const deleteRol = async (req, res) => {
    const id = parseInt(req.params.id)
    const response = await db.query("DELETE FROM Rol where idrol=$1;", [id]) ;

    res.json(
        `Rol eliminado con ID: ${id}`)

}
//Actualizar  Roles
const updateRol = async (req, res) => {
    const id = parseInt(req.params.id)
    const { rol } = req.body;
    const response = await db.query("UPDATE Rol set rol=$1 where idrol=$2 ;", [rol,id]);

    res.json({
        message: `Rol Actualizado con ID: ${id}`,
        body: {
            Rol: { id, rol }
        }
    })
}



module.exports = {
    getRoles,
    getRolesByID,
    createRol,
    deleteRol,
    updateRol
}