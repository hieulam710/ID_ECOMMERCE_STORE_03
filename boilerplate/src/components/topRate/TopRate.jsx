import { HeartFilled } from "@ant-design/icons";
 export function ProductItem() {
    return (<>
        <div className='border-chung-2 top-rate-item'>
            <div className='cover-img'>
                <img src="/images/download.jpeg" className='item-toprate-img' />
            </div>
            <div className='toprate-item-product'>
                <span className='product-name'> Wireless Headphone</span>
                <span className='product-price'>$19.99</span>
            </div>
            <div className='toprate-btn-like'>
                <button className='add-to-cart-btn '>Add to Cart</button>
                <div ><HeartFilled className='icon-heart' /></div>
            </div>
        </div>
    </>)
}

function TopRate() {
    return (<>
        <div className="toprate-container">
            <div className='toprate-wrapper'>
                <div className='toprate-title'>
                    <span className='toprate-title'>Top Rate Product</span>
                </div>
                <div className='toprate-body'>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </div>
    </>);
}

export default TopRate;