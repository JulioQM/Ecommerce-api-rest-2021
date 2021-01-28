const { db } = require("../cnn");
//Listar Pedidos
const getPedidos = async(req, res) => {
        try {
            const response = await db.any("select * from pedido order by  idpedido desc;");
            res.json(response);
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Listar Pedidos por ID
const getPedidosByID = async(req, res) => {
        try {
            const idpedido = parseInt(req.params.id)
            const response = await db.any("select * from pedido WHERE idpedido=$1 ;", [idpedido]);
            res.json(response);
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Listar Pedidos por Usuario
const getPedidosByUsuario = async(req, res) => {
        try {
            const idusuario = parseInt(req.params.id)
            const response = await db.any("select * from pedido WHERE idusuario=$1 ;", [idusuario]);
            res.json(response);
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Listar Ultimo Pedido
const getUltimoPedido = async(req, res) => {
        try {

            const response = await db.any("SELECT *FROM public.pedido  ORDER BY idPedido desc limit 1")
            res.json(response);
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Crear Pedidos
const createPedido = async(req, res) => {
        try {
            const { idusuario, iva, metododepago, preciototal, estado } = req.body;

            const response = await db.query("INSERT INTO pedido(idusuario, iva, metododepago, preciototal, estado) VALUES ($1, $2,$3,$4,$5);", [idusuario, iva, metododepago, preciototal, estado]);
            res.json({
                message: `Pedido Creado con Éxito`,
                body: {
                    Pedido: { idusuario, iva, metododepago, preciototal, estado }
                }
            })
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Eliminar Pedidos
const deletePedido = async(req, res) => {
        try {
            const idpedido = parseInt(req.params.id)
            const response = await db.query("UPDATE pedido  set estado=$1 where idpedido=$2 ;", [0, idpedido]);

            res.json(
                `Pedido ${idpedido} Eliminado con Éxito: `)
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }

    }
    //Actualizar Pedidos
const updatePedido = async(req, res) => {
    try {
        const idpedido = parseInt(req.params.id)
        const { idusuario, iva, metododepago, preciototal, estado } = req.body;
        const response = await db.query("UPDATE pedido set idusuario=$1, iva=$2, metododepago=$3, preciototal=$4, estado=$5 where idpedido=$6 ;", [idusuario, iva, metododepago, preciototal, estado, idpedido]);

        res.json({
            message: `Pedido ${idpedido} Actualizadado con  Éxito `,
            body: {
                Pedido: { idusuario, iva, metododepago, preciototal, estado }
            }
        })
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}
//PEDIDO CABECERA
const getPedidoCabecera = async (req, res) => {
    try {
        const {idpedido} = (req.params)
        const {idusuario} = (req.params)
        const response = await db.any(`SELECT p.idpedido, p.preciototal, to_char(p.fechapedido,'DD/MM/YYYY') as fecha, 
                            to_char(p.fechapedido,'HH12:MI:SS') as hora, p.idusuario, p.estado, u.nombre 
                            FROM pedido p INNER JOIN usuario u ON p.idusuario = u.idusuario 
                            WHERE p.idpedido = $1 AND p.idusuario = $2 AND p.estado != 0;`, [idpedido,idusuario])
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`
 
        })
    }
}




module.exports = {
    getPedidos,
    getPedidosByID,
    getPedidosByUsuario,
    createPedido,
    deletePedido,
    updatePedido,
    getUltimoPedido,
    getPedidoCabecera
}