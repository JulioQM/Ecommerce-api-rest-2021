const { db } = require("../cnn");
//Listar Publicidades
const getPublicidades = async (req, res) => {
    const response = await db.any("select * from publicidad order by  idpublicidad desc;");
    res.json(response);
}
//Listar Publicidad por ID
const getPublicidadesByID = async (req, res) => {
    const idpublicidad = parseInt(req.params.id)
    const response = await db.any("select * from publicidad WHERE idpublicidad=$1 ;", [idpublicidad]);
    res.json(response);
}
//Crear Publicidad
const createPublicidad = async (req, res) => {
    const { idpublicidad, titulo,descripcion,estado } = req.body;

    const response = await db.query("INSERT INTO Publicidad( idpublicidad, titulo,descripcion,estado ) VALUES ($1, $2,$3,$4);", [idpublicidad, titulo,descripcion,estado ]);
    res.json({
        message: `Publicidad Creada con ID: ${ idpublicidad}`,
        body: {
            Publicidad: {  idpublicidad, titulo,descripcion,estado  }
        }
    })
}
//Eliminar Publicidades
const deletePublicidad = async (req, res) => {
    const idpublicidad = parseInt(req.params.id)
    const response = await db.query("UPDATE publicidad  set estado=$1 where idpublicidad=$2 ;", [0,idpublicidad]);

    res.json(
        `Publicidad eliminada con ID: ${idpublicidad }`)

}
//Actualizar Publicidades
const updatePublicidad = async (req, res) => {
    const idpublicidad = parseInt(req.params.id)
    const {  titulo,descripcion,estado } = req.body;
    const response = await db.query("UPDATE publicidad  set titulo=$1,descripcion=$2,estado=$3 where idpublicidad=$4 ;", [titulo,descripcion,estado,idpublicidad]);
    
    res.json({
        message: `Publicidad Actualizadad con ID: ${idpublicidad }`,
        body: {
            Publicidad: {  idpublicidad, titulo,descripcion,estado  }
        }
    })
}



module.exports = {
    getPublicidades ,
    getPublicidadesByID,
    createPublicidad,
    deletePublicidad ,
    updatePublicidad
}