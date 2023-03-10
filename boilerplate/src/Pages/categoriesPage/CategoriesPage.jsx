import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./categoriesPage.css";
import { Breadcrumb, Slider, Checkbox, Rate } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { ProductItem } from "../../components/topRate/TopRate";


function CategoriesPage() {
    return (<>
        <div className="categories-page container">
            <Header />
            <div className="breadcum">
                <Breadcrumb
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <a href="">All Categories</a>,
                        }
                    ]}
                />
            </div>
            <div className="all-categories-title">
                <h1>All Categories</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
            </div>
            <div className="categories-body-content">
                <div className="categories-left-content border-chung-2">
                    <div className="left-content-form-padding-20px">
                        <h6> All Categories</h6>
                        <div className="allCategories---1 categori--item">
                            <ul>
                                <li>Computer & Laptop <span className="span-colo-gray">(25)</span></li>
                                <li>Mobile & Tablet <span className="span-colo-gray">(25)</span></li>
                                <li>Camera <span className="span-colo-gray">(25)</span></li>
                                <li>Tv & Smart Box <span className="span-colo-gray">(25)</span></li>
                                <li>Home Appliance <span className="span-colo-gray">(25)</span></li>
                                <li>Smart Watch <span className="span-colo-gray">(25)</span></li>
                                <li>Microphone & Audio <span className="span-colo-gray">(25)</span></li>
                                <li>Gaming <span className="span-colo-gray">(25)</span></li>
                                <li>Printer <span className="span-colo-gray">(25)</span></li>
                                <li>Accessories <span className="span-colo-gray">(25)</span></li>
                                <li>More Categories <span className="span-colo-gray">(25)</span></li>
                                <li>Computer & Laptop <span className="span-colo-gray">(25)</span></li>
                                <li>Computer & Laptop <span className="span-colo-gray">(25)</span></li>
                                <li>Computer & Laptop <span className="span-colo-gray">(25)</span></li>
                                <li>Computer & Laptop <span className="span-colo-gray">(25)</span></li>
                            </ul>
                        </div>
                        <div className="allCategories---2 categori--item">
                            <div className="categories-dropdown flex-fillter">
                                <h6>Filter by Price</h6>
                                <DownOutlined style={{ fontSize: "12px" }} />
                            </div>
                            <Slider defaultValue={30} />
                            <div className="categories-price-fillter ">
                                <span className="span-colo-gray">Price :</span> <h6>$100-$250</h6>
                            </div>
                        </div>
                        <div className="allCategories---3 categori--item">
                            <div className="categories-dropdown flex-fillter">
                                <h6>Filter by Location</h6>
                                <DownOutlined style={{ fontSize: "12px" }} />
                            </div>
                            <div className="categorie-flex-col-start">
                                <Checkbox className="span-colo-gray">Jakarta</Checkbox>
                                <Checkbox className="span-colo-gray">Yogyakarta</Checkbox>
                                <Checkbox className="span-colo-gray">Bandung</Checkbox>
                                <Checkbox className="span-colo-gray">Semarang</Checkbox>
                                <Checkbox className="span-colo-gray">Surabaya</Checkbox>
                            </div>
                        </div>
                        <div className="allCategories---4 categori--item">
                            <div className="categories-dropdown flex-fillter">
                                <h6>Filter by Ratting</h6>
                                <DownOutlined style={{ fontSize: "12px" }} />
                            </div>
                            <div className="categorie-flex-col-start">
                                <Checkbox ><Rate disabled defaultValue={1} /></Checkbox>
                                <Checkbox ><Rate disabled defaultValue={2} /></Checkbox>
                                <Checkbox ><Rate disabled defaultValue={3} /></Checkbox>
                                <Checkbox ><Rate disabled defaultValue={4} /></Checkbox>
                                <Checkbox ><Rate disabled defaultValue={5} /></Checkbox>
                            </div>
                        </div>
                       
                        <div className="allCategories---5 categori--item">
                            <div className="categories-dropdown flex-fillter">
                                <h6>Filter by Brand</h6>
                                <DownOutlined style={{ fontSize: "12px" }} />
                            </div>
                        </div>
                        <div className="allCategories---5 categori--item">
                            <div className="categories-dropdown flex-fillter">
                                <h6>Filter by Promotion</h6>
                                <DownOutlined style={{ fontSize: "12px" }} />
                            </div>
                        </div>
                        <div className="allCategories---5 categori--item">
                            <div className="categories-dropdown flex-fillter">
                                <h6>Filter by Payment</h6>
                                <DownOutlined style={{ fontSize: "12px" }} />
                            </div>
                        </div>
                        <div className="allCategories---5 categori--item">
                            <div className="categories-dropdown flex-fillter">
                                <h6>Filter by Shipment</h6>
                                <DownOutlined style={{ fontSize: "12px" }} />
                            </div>
                        </div>
                        <div className="fillter-btn">
                            <button >Fillter</button>
                        </div>
                        <div className="fillter-btn"><span>Reset Fillter</span></div>
                    </div>

                </div>
                <div className="categories-right-content">
                    <div className="categories--products">
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Microphone & Audio</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                        <div className="categories--product--item border--item">
                            <img src="/images/Laptop.png" alt="" />
                            <span>Computer & Laptop</span>
                        </div>
                    </div>

                    <div className="feature---brand">
                        <h2>Feature Brand</h2>
                        <div className="brands---row">
                            <img src="/images/SimSong.png" alt="" />
                            <img src="/images/Harps.png" alt="" />
                            <img src="/images/DiskVan.png" alt="" />
                            <img src="/images/Ikon.png" className="custom-ikon" alt="" />
                            <img src="/images/Strons.png" alt="" />
                            <img src="/images/Cocoon.png" alt="" />
                        </div>
                    </div>
                    <div className="categories-product-list">
                        <div className="product-list-title-review">
                            <h2>Product List</h2>
                            <span>View All</span>
                        </div>
                        <div className="grid-product---item">
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <Footer/>
    </>);
}

export default CategoriesPage;