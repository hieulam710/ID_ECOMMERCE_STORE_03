import "./newArrival.css"

function NewArrival() {
    return (<>
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
    </>);
}

export default NewArrival;