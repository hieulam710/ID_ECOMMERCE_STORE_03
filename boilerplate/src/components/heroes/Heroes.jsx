import { Carousel } from 'antd';




function Heroes() {
    return ( <>
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
    </> );
}

export default Heroes;