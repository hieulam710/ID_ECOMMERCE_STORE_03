import "./productDetail.css"
import Header from "../../components/header/Header"
function ProductDetail() {
    return (
        <>
            <div className="container product-detail-page">
                <Header />
                <div className="product-detail-body">
                    <div className="product-detail-left">
                        <div className="detail-image-slide">
                            <div className="detail-main-image ">
                                <img src="/images/download.jpeg"  />
                            </div>
                            <div className="image--slide">
                                <div className="image--1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-right">

                    </div>
                </div>
            </div>
        </>

    );
}

export default ProductDetail;