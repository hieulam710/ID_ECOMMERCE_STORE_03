import {
    InstagramOutlined, FacebookFilled, TwitterOutlined, LinkedinFilled, SearchOutlined, ShoppingOutlined, MailOutlined
} from '@ant-design/icons';
import React, { useState } from 'react'
import "./header.css"


function Header() {
    const [toggleMenu, setToggleMenu] = useState(true)
    const handleClick = ()=>{
        console.log("asd");
        setToggleMenu(!toggleMenu)
    }
    return (<>
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
                <div className="topnav" id="myTopnav">
                    <div id="header--navMenu">
                        <button id="toggle" onClick={handleClick}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    {toggleMenu ? (
                        <nav>
                            <ul id="main-menu">
                                <li>
                                    <a href="">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="">Sản phẩm</a>
                                </li>
                                <li>
                                    <a href="">Dịch Vụ</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Liên hệ</a>
                                </li>
                            </ul>
                        </nav>
                    ) : <></>}
                </div>
            </div>
        </header>
    </>);
}

export default Header;

