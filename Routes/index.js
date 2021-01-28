const {Router} = require("express")
const router = Router()


//RUTAS PARA USUARIOS
const {getUsuarios,getUsuarioByID,createUsuario,deleteUsuario,updateUsuario, loginUsuario
} = require("../Controllers/usuario.controller")
router.get("/Usuarios",getUsuarios)
router.get("/Usuarios/:id",getUsuarioByID)
router.post("/Usuarios",createUsuario)
router.delete('/Usuarios/:id', deleteUsuario)
router.put("/Usuarios/:id", updateUsuario)
router.get("/Usuario/:usuario-:clave",loginUsuario)
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

//RUTAS PARA PEDIDOS
const {
    getPedidos,
    getPedidosByID,
    getPedidosByUsuario,
    createPedido,
    deletePedido,
    updatePedido,
    getUltimoPedido,
    getPedidoCabecera
} = require("../Controllers/pedidos.controller")
router.get("/Pedidos", getPedidos)
router.get("/Pedidos/byUltimoPedido", getUltimoPedido)
router.get("/Pedidos/:id", getPedidosByID)
router.get("/Pedidos/byuser/:id", getPedidosByUsuario)
router.post("/Pedidos", createPedido)
router.delete('/Pedidos/:id', deletePedido)
router.put("/Pedidos/:id", updatePedido)
router.get("/PedidoCabecera/:idpedido-:idusuario",getPedidoCabecera)



//RUTAS PARA DETALLE PEDIDOS

const {
    getDetallePedidos,
    getDEtallePedidosByPedido,
    getDEtallePedidosByProduct,
    getDEtallePedidosByID,
    createDetallePedido,
    deleteDetallePedidoByPedido,
    deleteDetallePedido,
    updatePedidoDetalle,
    getPedidoDetalleById


} = require("../Controllers/detallepedido.controller")
router.get("/DetallePedidos", getDetallePedidos)
router.get("/DetallePedidos/bypedido/:idpedido", getDEtallePedidosByPedido)
router.get("/DetallePedidos/byproducto/:codproducto", getDEtallePedidosByProduct)
router.get("/DetallePedidos/:id", getDEtallePedidosByID)
router.post("/DetallePedidos", createDetallePedido)
router.delete('/DetallePedidos/:id', deleteDetallePedido)
router.delete('/DetallePedidos/bypedido/:id', deleteDetallePedidoByPedido)
router.put("/DetallePedidos/:id", updatePedidoDetalle)
router.get("/PedidoDetalle/:id",getPedidoDetalleById)

module.exports=router