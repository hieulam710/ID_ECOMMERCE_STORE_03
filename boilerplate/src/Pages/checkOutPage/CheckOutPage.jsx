import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./checkOutPage.css"
import { Breadcrumb, Steps, Button } from 'antd';

function CheckOutPage() {
    return (<>
        <div className="check-out-page container">
            <Header />
            <div className="check-out-body">
                <Breadcrumb
                    separator=">" items={[{ title: 'Home' },
                    { title: 'My Cart', href: '', },
                    { title: 'Check Out', href: '' }]}
                />
                <h1>Check Out</h1>
                <Steps
                    current={1}
                    items={[

                        { title: 'My Cart', },
                        { title: 'Check Out', }
                    ]}
                />
                <div className="infor-check-out">
                    <div className="checkout-body-left ">
                        <h4>Buyer infor</h4>
                        <form action="" className="form-infor-wrapper">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" />
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" />
                            </div>
                            <div>
                                <label htmlFor="contact">Contact</label>
                                <input type="text" id="contact" />
                            </div>
                            <div>
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" />
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" />
                            </div>

                            <div>
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" />
                            </div>
                            <div>
                                <label htmlFor="zipCode">Zip Code</label>
                                <input type="text" id="zipCode" />
                            </div>
                        </form>
                        <div className="note">
                            <label htmlFor="note">Note</label>
                            <textarea name="" id="note" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="checkout-body-right ">
                        <div className="checkout-payment-box ">
                            <h4>Your Order Summary</h4>
                            <div className="shopping-amount custom-floatleft border-bottom---1">
                                <p> <strong>1x</strong> <span className="shopping-name-prod">USB Speaker Portable</span> <span className="float-right-span price">$1000</span></p>         
                                <p> <strong>1x</strong> <span className="shopping-name-prod">USB Speaker Portable</span> <span className="float-right-span price">$1000</span></p>         
                            </div>
                            <div className="subtotal-tax-shipping custom-floatleft border-bottom---1">
                                <p><span className="">Subtotal</span> <span className="float-right-span subtotal price">$300.00</span></p>
                                <p><span className="">Shipping</span> <span className="float-right-span shipping price">$15.00</span></p>
                                <p><span className="">Tax</span> <span className="float-right-span tax price">$10.00</span></p>
                            </div>
                            <div className="total-price border-bottom---1">
                                <p> <span>Total</span> <span className="float-right-span totalPrice">$325.00</span></p>
                            </div>
                            <div className="type-payment">
                                <h5>Payment</h5>
                                <p>
                                <Button>Credit Card</Button>
                                <Button>Bank Transfer</Button>
                                <Button>Paypal</Button>
                                </p>

                            </div>
                            <div className="checkout--btn">
                                <button>Checkout</button>
                                <span>Back to Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </>);
}

export default CheckOutPage;