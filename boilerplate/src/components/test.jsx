import {
    InstagramOutlined, FacebookFilled,HeartFilled, TwitterOutlined, LinkedinFilled, SearchOutlined, ShoppingOutlined, MailOutlined
} from '@ant-design/icons';
import "./test.css"
import { Carousel, Progress } from 'antd';



function Test() {
    return (
        <>
            <div className="container">
                <header className='header-wrapper'>
                    <div className="top-navbar">
                        <div className="sosMedia">
                            <InstagramOutlined />
                            <FacebookFilled />
                            <TwitterOutlined />
                            <LinkedinFilled />
                        </div>
                        <div className="contact">
                            <div className='phone flex'>
                                <img src='/images/phone-icon.png' height={18} />
                                <p>+12 345 6789 0</p>
                            </div>
                            <div className='mail flex'>
                                <img src='/images/mail-icon.png' height={14} />
                                <p>support@tronix.com</p>
                            </div>
                            <div className='user flex'>
                                <img src='/images/user-icon.png' height={16} />
                                <p>Account</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-navbar">
                        <div className='logo-wraper'>
                            <img src='/images/Tronixlogo.png' />
                        </div>
                        <div className='nav-menu'>
                            <ul>
                                <li> <a href=""> Home</a></li>
                                <li> <a href=""> About</a></li>
                                <li> <a href=""> Product</a></li>
                                <li> <a href=""> Blog</a></li>
                                <li> <a href=""> Contact</a></li>
                            </ul>
                        </div>
                        <div className='search-bar'>
                            <form >
                                <input type="text" placeholder='Search here...' />
                                <button><SearchOutlined /></button>
                            </form>
                        </div>
                        <div className='icon-cart-mail'>
                            <div>
                                <ShoppingOutlined />
                            </div>
                            <MailOutlined />
                        </div>
                    </div>
                </header>
                <div className="hero-container">
                    <div className='slide-auto'>
                        <Carousel autoplay>
                            <div className='gallery__img'>
                                <img src='/images/download.jpeg' className='gallery__image' />
                            </div>
                            <div className='gallery__img'>
                                <img src='/images/download.jpeg' className='gallery__image' />
                            </div>
                            <div className='gallery__img'>
                                <img src='/images/download.jpeg' className='gallery__image' />
                            </div>
                            <div className='gallery__img'>
                                <img src='/images/download.jpeg' className='gallery__image' />
                            </div>
                            <div className='gallery__img'>
                                <img src='/images/download.jpeg' className='gallery__image' />
                            </div><div className='gallery__img'>
                                <img src='/images/download.jpeg' className='gallery__image' />
                            </div><div className='gallery__img'>
                                <img src='/images/download.jpeg' className='gallery__image' />
                            </div>
                        </Carousel>
                    </div>
                    <div className='hero-right'>
                        <div className='hero-box-1'>
                            <img src='/images/download.jpeg' className='hero__image' />
                            <button>PC Gamming Collection</button>
                        </div>
                        <div className='hero-box-1'>
                            <img src='/images/download.jpeg' className='hero__image' />
                            <button>PC Gamming Collection</button>
                        </div>
                    </div>
                </div>
                <div className="category-container">
                    <h2>Category</h2>
                    <div className='category-flex'>
                        <div className='category-item'>
                            <div className='category-icon border-chung-1'>
                                <img src="/images/Laptop.png" />
                            </div>
                            <p>computer & laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon  border-chung-1'>
                                <img src="/images/Smartphone.png" />
                            </div>
                            <p>computer & laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon border-chung-1'>
                                <img src="/images/Camera.png" />
                            </div>
                            <p>computer &l aptop</p>
                        </div><div className='category-item'>
                            <div className='category-icon border-chung-1'>
                                <img src="/images/Tv And Remote.png" />
                            </div>
                            <p>computer&laptop</p>
                        </div><div className='category-item'>
                            <div className='category-icon border-chung-1'>
                                <img src="/images/Air Conditioner.png" />
                            </div>
                            <p>computer&laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon border-chung-1 '>
                                <img src="/images/Speaker.png" />
                            </div>
                            <p>computer & laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon border-chung-1'>
                                <img src="/images/Gamepad.png" />
                            </div>
                            <p>computer&laptop</p>
                        </div>
                    </div>
                </div>
                <div className="newArrival-container">
                    <h2>New Arrival</h2>
                    <div className='newarrival-wrapper'>
                        <div className='border-chung-2 arrival-item'>
                            <div className='left-item'>
                                <img src='/images/download.jpeg' height={'100%'} />
                                <div className='new-circle'>NEW</div>
                            </div>
                            <div className='right-item'>
                                <h3>Smartphone 5G</h3>
                                <strong>$299.00</strong>
                            </div>
                        </div>
                        <div className='border-chung-2 arrival-item'>
                            <div className='left-item'>
                                <img src='/images/download.jpeg' height={'100%'} />
                                <div className='new-circle'>NEW</div>
                            </div>
                            <div className='right-item'>
                                <h3>Smartphone 5G</h3>
                                <strong>$299.00</strong>
                            </div>
                        </div>
                        <div className='border-chung-2 arrival-item'>
                            <div className='left-item'>
                                <img src='/images/download.jpeg' height={'100%'} />
                                <div className='new-circle'>NEW</div>
                            </div>
                            <div className='right-item'>
                                <h3>Smartphone 5G</h3>
                                <strong>$299.00</strong>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flashSale-container">
                    <div className='flex-col-2 flex-col-9'>
                        <div className='flex-row-1'>
                            <div className='flash-sale montserrat-bold-onyx-56px'>
                                <span className='c'> Flash Sale</span>
                            </div>
                            <div className='countdown'>
                                <div className='countdown-item border-chung-2'>
                                    <div className='numver-1 number-4 poppins-bold-bittersweet-24px'>
                                        <span className='poppins-bold-bittersweet-24px'>1</span>
                                    </div>
                                    <div className='hrs poppin-normal-quick-silver-18px'>
                                        <span className='poppin-normal-quick-silver-18px'>Hrs</span>
                                    </div>
                                </div>
                                <div className='countdown-item border-chung-2'>
                                    <div className='numver-2 number-4 poppins-bold-bittersweet-24px'>
                                        <span className='poppins-bold-bittersweet-24px'>34</span>
                                    </div>
                                    <div className='hrs poppin-normal-quick-silver-18px'>
                                        <span className='poppin-normal-quick-silver-18px'>Min</span>
                                    </div>
                                </div>
                                <div className='countdown-item border-chung-2'>
                                    <div className='numver-3 number-4 poppins-bold-bittersweet-24px'>
                                        <span className='poppins-bold-bittersweet-24px'>12</span>
                                    </div>
                                    <div className='hrs poppin-normal-quick-silver-18px'>
                                        <span className='poppin-normal-quick-silver-18px'>Sec</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flash-sale-product'>
                        <div className='flex-row-3-item'>
                            <div className='item-sale border-chung-2 text-aline-center'>
                                <div className='image-product'>
                                    <img src="/images/download.jpeg" width={"100%"} />
                                </div>
                                <div className='product-detail'>
                                    <span className='product-name'> Wireless Headphone</span>
                                    <span className='product-price'>$19.99</span>
                                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <span>Avalible:10</span>
                                        <span> Sold:5</span>
                                    </div>
                                    <Progress percent={50} showInfo={false} />
                                </div>
                            </div>
                            <div className='item-sale border-chung-2 text-aline-center'>
                                <div className='image-product'>
                                    <img src="/images/download.jpeg" width={"100%"} />
                                </div>
                                <div className='product-detail'>
                                    <span className='product-name'> Wireless Headphone</span>
                                    <span className='product-price'>$19.99</span>
                                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <span>Avalible:10</span>
                                        <span> Sold:5</span>
                                    </div>
                                    <Progress percent={50} showInfo={false} />
                                </div>
                            </div>
                            <div className='item-sale border-chung-2 text-aline-center'>
                                <div className='image-product'>
                                    <img src="/images/download.jpeg" width={"100%"} />
                                </div>
                                <div className='product-detail'>
                                    <span className='product-name'> Wireless Headphone</span>
                                    <span className='product-price'>$19.99</span>
                                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <span>Avalible:10</span>
                                        <span> Sold:5</span>
                                    </div>
                                    <Progress percent={50} showInfo={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-wrapper">
                    <img src="/images/Cocoon.png" className='image-brand' />
                    <img src="/images/DiskVan.png" className='image-brand' />
                    <img src="/images/Harps.png" className='image-brand' />
                    <img src="/images/Ikon.png" className='image-brand' />
                    <img src="/images/SimSong.png" className='image-brand' />
                    <img src="/images/Strons.png" className='image-brand' />
                </div>
                <div className="banner-container">
                    <div className='banner-box'>
                        <span className='banner-title'>Get Best Quality Device</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor. </p>
                        <button className='shop-now-btn'>Shop now</button>
                    </div>
                </div>
                <div className="feature-wrapper">
                    <div className=' witdh-25'>
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
                <div className="toprate-container">
                    <div className='toprate-wrapper'>
                        <div className='toprate-title'>
                            <span className='toprate-title'>Top Rate Product</span>
                        </div>
                        <div className='toprate-body'>
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
                                    <div ><HeartFilled  className='icon-heart'/></div>
                                </div>

                            </div> <div className='border-chung-2 top-rate-item'>
                                <div className='cover-img'>
                                    <img src="/images/download.jpeg" className='item-toprate-img' />
                                </div>
                                <div className='toprate-item-product'>
                                    <span className='product-name'> Wireless Headphone</span>
                                    <span className='product-price'>$19.99</span>
                                </div>
                                <div className='toprate-btn-like'>
                                    <button className='add-to-cart-btn '>Add to Cart</button>
                                    <div ><HeartFilled  className='icon-heart'/></div>
                                </div>

                            </div> <div className='border-chung-2 top-rate-item'>
                                <div className='cover-img'>
                                    <img src="/images/download.jpeg" className='item-toprate-img' />
                                </div>
                                <div className='toprate-item-product'>
                                    <span className='product-name'> Wireless Headphone</span>
                                    <span className='product-price'>$19.99</span>
                                </div>
                                <div className='toprate-btn-like'>
                                    <button className='add-to-cart-btn '>Add to Cart</button>
                                    <div ><HeartFilled  className='icon-heart'/></div>
                                </div>

                            </div> <div className='border-chung-2 top-rate-item'>
                                <div className='cover-img'>
                                    <img src="/images/download.jpeg" className='item-toprate-img' />
                                </div>
                                <div className='toprate-item-product'>
                                    <span className='product-name'> Wireless Headphone</span>
                                    <span className='product-price'>$19.99</span>
                                </div>
                                <div className='toprate-btn-like'>
                                    <button className='add-to-cart-btn '>Add to Cart</button>
                                    <div ><HeartFilled  className='icon-heart'/></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="newsletter-container">
                    <div className='letter--left'>
                        <img src="/images/Newsletter.png" />
                        <div className='letter-text'>
                            <h1>Join our newsletter now!</h1>
                            <p>Register now and get our latest updates and promos.</p>
                        </div>
                        <div className='footer-btn'>
                            <input type="text" />
                            <button>Join</button>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom container'>
                    <div className='footer__1 footerrrrr' >
                        <img src="/images/Tronixlogo.png" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aspernatur laborum impedit laudantium voluptas corrupti accusamus.
                        </p>
                    </div>
                    <div className='footer__2 footerrrrr' >
                        <h3>Company</h3>
                        <ul>
                            <li> <p>Home</p> </li>
                            <li><p> About</p></li>
                            <li><p>Product</p> </li>
                            <li><p>Blog</p> </li>
                            <li><p>Contact</p> </li>
                        </ul>
                    </div>
                    <div className='footer__3 footerrrrr' >
                        <h3>Information</h3>
                        <ul>
                            <li><p>Help Center</p> </li>
                            <li><p>Payment Method</p> </li>
                            <li> <p>Return & Refund</p></li>
                            <li> <p>Privacy Policy</p></li>
                        </ul>
                    </div>
                    <div className='footer__4 footerrrrr' >
                        <h3>Follow Us</h3>
                        <div className='flex'>
                            <InstagramOutlined />
                            <FacebookFilled />
                            <TwitterOutlined />
                        </div>
                    </div>
                </div>
                <div className='coppywrite container'>
                    <p>Copyright © 2021 Tronix. All Right Reseved</p>
                </div>
            </footer>
        </>);
}

export default Test;