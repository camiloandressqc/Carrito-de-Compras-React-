import { Products } from "./components/products";
import Car from "./components/car";
import contents from "./content";
import { useState } from "react";

export default function App(){

    let [store, setStore] = useState(JSON.parse(localStorage.getItem("store")));

    return(
        <div className="App">
            {contents.map(contents => (
                <Products
                    key={contents.id}
                    id={contents.id}
                    image={contents.image}
                    name={contents.name}
                    price={contents.price}
                    totalSales={contents.totalSales}
                    timeLeft={contents.timeLeft}
                    rating={contents.rating}
                    setStore={setStore}
                    />
                    ))}
            <Car store={store} setStore={setStore}/>
        </div>
    )
}





















//-------------------------------EJEMPLO  INICIAL REACT-----------------------------------------------
//import React from 'react';
//import Card from '../components/card';
// function App () {
//   return(
//     <div>

//     </div>
//   )
// }

// export default Card; 
//-------------------------------EJEMPLO  INICIAL REACT-----------------------------------------------

