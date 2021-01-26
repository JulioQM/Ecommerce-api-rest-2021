const { db } = require("../cnn");
//Listar Publicidades
const getPublicidades = async (req, res) => {
    try {
        const response = await db.any("select * from publicidad order by  idpublicidad desc;");
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Listar Publicidad por ID
const getPublicidadesByID = async (req, res) => {
    try {
        const idpublicidad = parseInt(req.params.id)
        const response = await db.any("select * from publicidad WHERE idpublicidad=$1 ;", [idpublicidad]);
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Crear Publicidad
const createPublicidad = async (req, res) => {
    try {
        const { idpublicidad, titulo, descripcion, estado, imagen } = req.body;

        const response = await db.query("INSERT INTO Publicidad(titulo,descripcion,estado,imagen ) VALUES ($1, $2,$3,$4);", [titulo, descripcion, estado, imagen]);
        res.json({
            message: `Publicidad Creada con ID: ${idpublicidad}`,
            body: {
                Publicidad: { idpublicidad, titulo, descripcion, estado, imagen }
            }
        })
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//Eliminar Publicidades
const deletePublicidad = async (req, res) => {
    try {
        const idpublicidad = parseInt(req.params.id)
        const response = await db.query("UPDATE publicidad  set estado=$1 where idpublicidad=$2 ;", [0, idpublicidad]);

        res.json(
            `Publicidad eliminada con ID: ${idpublicidad}`)
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }

}
//Actualizar Publicidades
const updatePublicidad = async (req, res) => {
    try{
    const idpublicidad = parseInt(req.params.id)
    const { titulo, descripcion, estado, imagen } = req.body;
    const response = await db.query("UPDATE publicidad  set titulo=$1,descripcion=$2,estado=$3 ,imagen=$4 where idpublicidad=$5 ;", [titulo, descripcion, estado, imagen, idpublicidad]);

    res.json({
        message: `Publicidad Actualizadad con ID: ${idpublicidad}`,
        body: {
            Publicidad: { idpublicidad, titulo, descripcion, estado, imagen }
        }
    })
} catch (error) {
    res.json({
        message: `Error detectado: ${error}`

    })
}
}



module.exports = {
    getPublicidades,
    getPublicidadesByID,
    createPublicidad,
    deletePublicidad,
    updatePublicidad
}