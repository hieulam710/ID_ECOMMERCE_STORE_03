import { InstagramOutlined , FacebookFilled ,TwitterOutlined} from "@ant-design/icons";
import "./footer.css"

function Footer() {
    return ( <>
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
    </> );
}

export default Footer;