import "./feature.css"


function Feature() {
    return (<>
        <div className="feature-wrapper">
            <div className='witdh-25'>
                <span className='best-collection'>
                    Best Collection
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <button className='shop-now-btn'>Shop now</button>
            </div>
            <div className='feature-product-right witdh-75'>
                <div className='feature-title'>
                    <span className='feature-title-header'>Feature Product</span>
                    <div className='feature-row-1'>
                        <div className='feature-item-col-3 border-chung-2'>
                            <img src="/images/download.jpeg" width={"100%"} height={"280px"} />
                            <div className='feature-product-detail'>
                                <span className='product-name'> Wireless Headphone</span>
                                <span className='product-price'>$19.99</span>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                        <div className='feature-item-col-3 border-chung-2'>
                            <img src="/images/download.jpeg" width={"100%"} height={"280px"} />
                            <div className='feature-product-detail'>
                                <span className='product-name'> Wireless Headphone</span>
                                <span className='product-price'>$19.99</span>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                        <div className='feature-item-col-3 border-chung-2'>
                            <img src="/images/download.jpeg" width={"100%"} height={"280px"} />
                            <div className='feature-product-detail'>
                                <span className='product-name'> Wireless Headphone</span>
                                <span className='product-price'>$19.99</span>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Feature;