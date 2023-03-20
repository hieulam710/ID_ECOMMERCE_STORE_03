
import "./toprate.css"
import { useState ,useEffect } from "react";

import { HeartFilled } from "@ant-design/icons";
 export function ProductItem(props) {
    console.log(props);
    return (<>
        <div className='border-chung-2 top-rate-item'>
            
            <div className='cover-img'>
                <img src={props.dataT.image !=  undefined ? `${props.dataT.image}` : "" } className='item-toprate-img' />
            </div>
            <div className='toprate-item-product'>
                <span className='product-name'> {props.dataT.name !=  undefined ?props.dataT.name : "" }</span>
                <span className='product-price'>${props.dataT.price !=  undefined ?props.dataT.price : "" }</span>
            </div>
            <div className='toprate-btn-like'>
                <button className='add-to-cart-btn '>Add to Cart</button>
                <div ><HeartFilled className='icon-heart' /></div>
            </div>
        </div>
    </>)
}

function TopRate() {
    const [dataTopRate , setDataTopRate] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/topRate")
        .then((response) => response.json())
        .then((data) => setDataTopRate(data)
        );
    },[])
   console.log(dataTopRate);
    
    return (<>
        <div className="toprate-container">
            <div className='toprate-wrapper'>
                <div className='toprate-title'>
                    <span className='toprate-title'>Top Rate Product</span>
                </div>
                <div className='toprate-body'>
                    <ProductItem dataT={dataTopRate[0] != undefined ? dataTopRate[0] : ""}/>
                    <ProductItem dataT={dataTopRate[0] != undefined ? dataTopRate[1] : ""}/>
                    <ProductItem dataT={dataTopRate[0] != undefined ? dataTopRate[2] : ""}/>
                    <ProductItem dataT={dataTopRate[0] != undefined ? dataTopRate[3] : ""}/>
                </div>
            </div>
        </div>
    </>);
}

export default TopRate;