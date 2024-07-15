import React, { useMemo } from 'react'

const Car = (props) => {

    console.log(props.store)
    const Total = useMemo(()=>{
        // Cualquier valor que no sea false, undefined, null, 0, NaN,'' retorna true

        return props.store && props.store.length ? props.store.map(product => product.subtotal).reduce((previousValue, currentValue) => previousValue + currentValue): 0;
    }, [props.store])

    function Delete(index){
        console.log(index)

        // Se elimina el elemento asociado al indice recibido
        // El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        // splice(Posicion Inicial donde comienza a cambiar el array, num elementos a eliminar, item1, item2)
        let newStore = props.store.filter((prod) => prod.id !== index)

        // Se actualiza la informacion en el localstorage
        localStorage.setItem("store", JSON.stringify(newStore))
        props.setStore(newStore)

        
    }

  return (
    <article className="information">
            <h1>Carrito de Compras</h1>

            <div >
                <table >
                    <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Accion</th>
                    </tr>
                    </thead>
                    <tbody>
                    { localStorage.getItem("store") && JSON.parse(localStorage.getItem("store")).map((product)=> (
                        <tr key={product.id}>
                        <td><img src={product.image} /></td>
                        <td><h2>{product.name}</h2></td>
                        <td><h2>{product.price}$</h2></td>
                        <td>
                            <h2>{product.totalSales}</h2>
                        </td>
                        <td className="subtotal"><h2>{product.subtotal}$</h2></td>
                        <td class="action" ><button onClick={()=>Delete(product.id)}>Eliminar</button></td>
                    </tr>)
                    ) }
                    
                    </tbody>
                    
                </table>
                <div >
                        <h1>TOTAL: <span>{Total.toFixed(2)}</span></h1>
                </div>
            </div>
            {!localStorage.getItem("store")&&<div>
                <h2 >Tu Carrito de Compras esta Vacio</h2>
            </div>}
            
        </article>
  )
}

export default Car