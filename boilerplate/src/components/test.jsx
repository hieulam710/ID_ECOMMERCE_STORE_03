import {
    InstagramOutlined, FacebookFilled, TwitterOutlined, LinkedinFilled, SearchOutlined, ShoppingOutlined, MailOutlined
} from '@ant-design/icons';
import "./test.css"
import { Carousel } from 'antd';



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
                            <div className='category-icon border-chung'>
                                <img src="/images/Laptop.png" />
                            </div>
                            <p>computer & laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon  border-chung'>
                                <img src="/images/Smartphone.png" />
                            </div>
                            <p>computer & laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon border-chung'>
                                <img src="/images/Camera.png" />
                            </div>
                            <p>computer &l aptop</p>
                        </div><div className='category-item'>
                            <div className='category-icon border-chung'>
                                <img src="/images/Tv And Remote.png" />
                            </div>
                            <p>computer&laptop</p>
                        </div><div className='category-item'>
                            <div className='category-icon border-chung'>
                                <img src="/images/Air Conditioner.png" />
                            </div>
                            <p>computer&laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon border-chung '>
                                <img src="/images/Speaker.png" />
                            </div>
                            <p>computer & laptop</p>
                        </div>
                        <div className='category-item'>
                            <div className='category-icon border-chung'>
                                <img src="/images/Gamepad.png" />
                            </div>
                            <p>computer&laptop</p>
                        </div>
                    </div>
                </div>
                <div className="newArrival-container">
                    <h2>New Arrival</h2>
                    <div className='newarrival-wrapper'>
                        <div className='border-chung arrival-item'>
                            <div className='left-item'>
                                <img src='/' />
                            </div>
                            <div className='right-item'>

                            </div>
                        </div>
                        <div className='border-chung arrival-item'>
                            <div className='left-item'>
                                <img src='/' />

                            </div>
                            <div className='right-item'>
                                <h3>Smartphone 5G</h3>
                                <strong>$299.00</strong>
                            </div>
                        </div>
                        <div className='border-chung arrival-item'>
                            <div className='left-item'>
                                <img src='' />
                            </div>
                            <div className='right-item'>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="flashSale-container"></div>
                <div className="brand-wrapper"></div>
                <div className="banner-container"></div>
                <div className="feature-wrapper"></div>
                <div className="toprate-container"></div>

            </div>
            <footer className="footer">
                <div className="newsletter-container">
                    <div className='letter--left'>
                        <img src="/images/Newsletter.png" alt="" />
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