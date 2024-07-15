import { FaStar,FaFireAlt } from "react-icons/fa";

export function Products(props) {

    const addToCar = () => {
        console.log("agregado al carrito");
        if(localStorage.getItem("store")){
            let store = JSON.parse(localStorage.getItem("store"));
            let producto = {
                id:props.id,
                image:props.image,
                name:props.name,
                price:props.price,
                totalSales:props.totalSales,
                timeLeft:props.timeLeft,
                rating:props.rating,
                subtotal: props.price*props.totalSales,
            }
            const existe = store.filter(product => product.id === producto.id);
            if(!existe.length) store.push(producto);
            localStorage.setItem('store', JSON.stringify(store));
            props.setStore(store)
        }else{
            let producto = {
                id:props.id,
                image:props.image,
                name:props.name,
                price:props.price,
                totalSales:props.totalSales,
                timeLeft:props.timeLeft,
                rating:props.rating,
                subtotal: props.price*props.totalSales,
            }
            let car = [producto]
            
            localStorage.setItem('store', JSON.stringify(car));
            props.setStore(car);
        }

        
    }

    return(

        <div className="productList">
            <div key={props.image} className="productCard">
                <img src={props.image} alt="product-img" className="productImage"></img>
                <FaFireAlt className={"productCard_fastSelling"} />

                <div className="productCard_content">
                    
                    <div className="displayStack__1">
                        <h3 className="productName">{props.name}</h3>
                        <div className="productPrice">${props.price}</div>
                    </div>
                    <div className="displayStack__2">
                    <div className="productSales"><FaStar /> {props.totalSales} Combos Vendidos </div>
                        
                        {/* <div className="productRating">
                            {[...Array(props.rating)].map((index) => ( // no lo vi util puesto que la estructura de datos no contiene un atributo al cual apunte props.rating
                                <FaStar id={index + 4 } key={index} />
                            ))}
                        </div> */}
                        <div className="productTime"><FaStar /> {props.timeLeft} Dias Restantes de la Promocion</div>
                        
                    </div>
                    <button className="productAdd" onClick={addToCar}>Add To Car</button>
                </div>
            </div>
        </div>
    )
}

