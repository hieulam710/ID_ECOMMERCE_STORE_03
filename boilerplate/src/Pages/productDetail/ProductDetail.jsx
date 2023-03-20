import "./productDetail.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Avatar, Rate } from 'antd';
import { useState } from "react";
import { HeartFilled } from '@ant-design/icons';


const desc = ['1.0', '2.0', '3.0', '4.0', '5.0'];

function ReviewComment() {
    const [value, setValue] = useState(5);

    return (<>
        <div className="review-component-item">
            <div className="review__class_item">
                <Avatar shape="square" size="large" />
                <div className="user__point__rating">
                    <span className="username-rating"> Vanile</span>
                    <span>
                        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                        <Rate onChange={setValue} value={value} disabled />
                    </span>
                </div>
                <span className="rate-time">1 Month Ago</span>
            </div>
            <div className="review_text-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
    </>)
}

function ProductDetail() {
    return (
        <>
            <div className="container product-detail-page">
                <Header />
                <div className="product-detail-body">
                    <div className="product-detail-left">
                        <div className="detail-image-slide">
                            <div className="detail-main-image">
                                <img src="/images/download.jpeg" className="border-radius-10px custom-image-product-page" />
                            </div>
                            <div className="image--slide">
                                <div className="image--1">
                                    <img src="/images/download.jpeg" className="border-radius-10px custom-image-product-page" />
                                </div>
                                <div className="image--1">
                                    <img src="/images/download.jpeg" className="border-radius-10px custom-image-product-page" />
                                </div>
                                <div className="image--1">
                                    <img src="/images/download.jpeg" className="border-radius-10px custom-image-product-page" />
                                </div>
                            </div>
                        </div>
                        <div className="detail---review">
                            <div className="re-des-dis-gift">
                                <div><span>Reviews(200)</span></div>
                                <div><span>Description</span></div>
                                <div><span>Discussion</span></div>
                                <div><span>Gift Cards</span></div>
                            </div>
                            <div className="box-review-comment">
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-right">
                        {/* <Breadcrumb separator=">"
                            items={[{ title: 'Product' },
                            { title: 'Wireless Microphone', href: '', }]}
                        ></Breadcrumb> */}
                        <div className="rate--add-to-wishlish">
                            <div>
                                <Rate defaultValue={5} disabled />
                                {/* <span>review (12) | Sold 99</span> */}
                            </div>
                            <div className="add-to-whislist">
                                <HeartFilled />
                                <h5>Add to Wishlist</h5>
                            </div>
                        </div>
                        <h1>Wireless Microphone</h1>
                        <div className="price--sale">
                            <strong>$29.00</strong>
                            <span className="line-through">$99.00</span>
                            <div className="save-50">Save 50%</div>
                        </div>
                        <div className="proto-delivery">
                            <div >
                                <img src="/images/Fast Delivery.png" alt="" />
                                <div>Free Delivery</div>
                            </div>
                            <div >
                                <img src="/images/voucher.png" alt="" />
                                <div>Alivable Voucher</div>
                            </div>
                            <div >
                                <img src="/images/Package.png" alt="" />
                                <div>In Stock</div>
                            </div>
                        </div>
                        <div className="description--wrapper">
                            <span>Description</span>
                            <p>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p>
                        </div>
                        <div className="count-quantity">
                            <div><p>Quantity</p></div>
                            <div className="handle-plus-minus">
                                <button className="minus-btn custom-1-btn">-</button>
                                <span className="num-count">1</span>
                                <button className="plus-btn custom-1-btn">+</button>
                            </div>
                            <div className="group-btn-add-chat">
                                <button className="custom-1-btn chat-btn">Chat</button>
                                <button className="custom-1-btn add-2-cart-btn">Add to cart</button>
                            </div>
                        </div>
                        <div className="add-your-review">
                            <div className="add-review-title">
                                <span>Add your review</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                            </div>
                            <form >
                                <div>
                                    <label htmlFor="">Name *</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Email *</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Review *</label>
                                    <textarea></textarea>
                                </div>
                                <div>
                                    Rating <Rate />
                                </div>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default ProductDetail;