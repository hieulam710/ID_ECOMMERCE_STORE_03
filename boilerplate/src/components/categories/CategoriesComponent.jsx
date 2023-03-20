import { NavLink } from "react-router-dom";
import "./categories.css"

function CategoriesComponent() {
    return (<>
        <div className="category-container">
            <h2>Category</h2>
            <div className='category-flex'>
                <div className='category-item'>
                    <NavLink to={"/categoriesPage"}>
                        <div className='category-icon border-chung-1'>
                            <img src="/images/Laptop.png" />
                        </div>
                    </NavLink>
                    <p>computer & laptop</p>
                </div>
                <div className='category-item'>
                    <NavLink to={"/categoriesPage"}>
                        <div className='category-icon  border-chung-1'>
                            <img src="/images/Smartphone.png" />
                        </div>
                    </NavLink>
                    <p>computer & laptop</p>
                </div>
                <div className='category-item'>
                    <NavLink to={"/categoriesPage"}>
                        <div className='category-icon border-chung-1'>
                            <img src="/images/Camera.png" />
                        </div>
                    </NavLink>
                    <p>computer &l aptop</p>
                </div><div className='category-item'>
                    <NavLink to={"/categoriesPage"}>
                        <div className='category-icon border-chung-1'>
                            <img src="/images/Tv And Remote.png" />
                        </div>
                    </NavLink>

                    <p>computer&laptop</p>
                </div><div className='category-item'>
                    <NavLink to={"/categoriesPage"}>
                        <div className='category-icon border-chung-1'>
                            <img src="/images/Air Conditioner.png" />
                        </div>
                    </NavLink>
                    <p>computer&laptop</p>
                </div>
                <div className='category-item'>
                    <NavLink to={"/categoriesPage"}>
                        <div className='category-icon border-chung-1 '>
                            <img src="/images/Speaker.png" />
                        </div>
                    </NavLink>
                    <p>computer & laptop</p>
                </div>
                <div className='category-item'>
                    <NavLink to={"/categoriesPage"}>
                        <div className='category-icon border-chung-1'>
                            <img src="/images/Gamepad.png" />
                        </div>
                    </NavLink>
                    <p>computer&laptop</p>
                </div>
            </div>
        </div>
    </>);
}

export default CategoriesComponent;