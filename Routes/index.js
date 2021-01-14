const {Router} = require("express")
const router = Router()


//RUTAS PARA USUARIOS
const {getUsuarios,getUsuarioByID,createUsuario,deleteUsuario,updateUsuario
} = require("../Controllers/usuario.controller")
router.get("/Usuarios",getUsuarios)
router.get("/Usuarios/:id",getUsuarioByID)
router.post("/Usuarios",createUsuario)
router.delete('/Usuarios/:id', deleteUsuario)
router.put("/Usuarios/:id", updateUsuario)
//RUTAS PARA ROLES

const {getRoles,getRolesByID,createRol,deleteRol,updateRol
} = require("../Controllers/rol.controller")
router.get("/Roles",getRoles)
router.get("/Roles/:id",getRolesByID)
router.post("/Roles", createRol)
router.delete('/Roles/:id', deleteRol)
router.put("/Roles/:id", updateRol)
//RUTAS PARA PUBLICIDAD

const {getPublicidades , getPublicidadesByID,createPublicidad,deletePublicidad ,updatePublicidad} = require("../Controllers/publicidad.controller")
router.get("/Publicidades",getPublicidades )
router.get("/Publicidades/:id", getPublicidadesByID)
router.post("/Publicidades", createPublicidad)
router.delete('/Publicidades/:id', deletePublicidad)
router.put("/Publicidades/:id", updatePublicidad)

module.exports=router