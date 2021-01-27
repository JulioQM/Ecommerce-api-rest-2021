const { db } = require("../cnn");
//Listar Detalle Pedidos


const getDetallePedidos = async(req, res) => {
        try {
            const response = await db.any("select * from detalle_pedido order by  idDetalle desc;");
            res.json(response);
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Listar Detalle Pedidos por ID pedido
const getDEtallePedidosByPedido = async(req, res) => {
        try {
            const idpedido = parseInt(req.params.idpedido)
            const response = await db.any("select * from detalle_pedido  WHERE idpedido=$1 ;", [idpedido]);
            res.json(response);
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Listar Detalle Pedidos por COD de producto
    const getDEtallePedidosByProduct = async(req, res) => {
        try {
            const codproducto = req.params.codproducto;
            const response = await db.any("select d.iddetalle, d.idpedido, d.codproducto, d.cantidad, d.preciounitario,d.subtotal,pedido.fechapedido from detalle_pedido d inner join pedido ON pedido.idpedido=d.idpedido WHERE codproducto=$1", [codproducto]);
            res.json(response);
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Listar Detalle Pedidos por ID 
const getDEtallePedidosByID = async(req, res) => {
    try {
        const idDetalle = parseInt(req.params.id)
        const response = await db.any("select * from detalle_pedido  WHERE idDetalle=$1 ;", [idDetalle]);
        res.json(response);
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}

//Crear Detalle Pedidos
const createDetallePedido = async(req, res) => {
        try {
            const { idpedido, codproducto, cantidad, preciounitario, subtotal } = req.body;

            const response = await db.query("INSERT INTO detalle_pedido( idPedido, codproducto, cantidad, preciounitario, subtotal) VALUES ($1, $2,$3,$4,$5);", [idpedido, codproducto, cantidad, preciounitario, subtotal]);
            res.json({
                message: `Detalle Pedido Creado con Éxito`,
                body: {
                    Detalle_Pedido: { idpedido, codproducto, cantidad, preciounitario, subtotal }
                }
            })
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }
    }
    //Eliminar Pedidos
const deleteDetallePedido = async(req, res) => {
    try {
        const idDetalle = parseInt(req.params.id)
        const response = await db.query("delete from detalle_pedido  where idDetalle=$1;", [idDetalle]);

        res.json(
            `Detalle Pedido ${idDetalle} Eliminado con Éxito: `)
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }

}
const deleteDetallePedidoByPedido = async(req, res) => {
        try {
            const idpedido = parseInt(req.params.idPedido)
            const response = await db.query("delete from detalle_pedido  where idpedido=$1;", [idpedido]);

            res.json(
                `Detalles del  Pedido ${idpedido} Eliminados con Éxito: `)
        } catch (error) {
            res.json({
                message: `Error detectado: ${error}`

            })
        }

    }
    //Actualizar Pedidos
const updatePedidoDetalle = async(req, res) => {
    try {
        const idDetalle = parseInt(req.params.id)
        const { idpedido, codproducto, cantidad, preciounitario, subtotal } = req.body;
        const response = await db.query("UPDATE detalle_pedido set idpedido=$1, codproducto=$2, cantidad=$3, preciounitario=$4, subtotal=$5 where idDetalle=$6;", [idpedido, codproducto, cantidad, preciounitario, subtotal, idDetalle]);

        res.json({
            message: `Detalle Pedido  ${idDetalle} Actualizadado con  Éxito `,
            body: {
                Pedido: { idpedido, codproducto, cantidad, preciounitario, subtotal }
            }
        })
    } catch (error) {
        res.json({
            message: `Error detectado: ${error}`

        })
    }
}



module.exports = {
    getDetallePedidos,
    getDEtallePedidosByProduct,
    getDEtallePedidosByPedido,
    getDEtallePedidosByID,
    createDetallePedido,
    deleteDetallePedidoByPedido,
    deleteDetallePedido,
    updatePedidoDetalle
}