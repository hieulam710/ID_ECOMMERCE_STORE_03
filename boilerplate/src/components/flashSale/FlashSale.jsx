import { Progress } from 'antd';
import React, { useState, useEffect } from "react";
import "./flashSale.css"

function ProductItem() {
    return (<>

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
        </div></>)
}

function FlashSale() {
    return (<>
        <div className="flashSale-container">
            <div className='flex-col-2 flex-col-9'>
                <div className='flex-row-1'>
                    <div className='flash-sale montserrat-bold-onyx-56px'>
                        <span className='c'> Flash Sale</span>
                    </div>
                    {/* dasd */}
                    <div className='countdown'>
                        <CountdownTimer></CountdownTimer>
                    </div>
                </div>
            </div>
            <div className='flash-sale-product'>
                <div className='flex-row-3-item'>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    </>);
}

export default FlashSale;

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(1800); // 1800 giây tương đương với 30 phút

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            // Nếu đã đếm ngược hết 30 phút, reset lại timeLeft về 30 phút
            return 1800;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);

      // Nếu component bị unmount, clear interval đang chạy để tránh memory leak
      return () => clearInterval(intervalId);
    }, []);
  
    const seconds = timeLeft % 60;
    const minutes = Math.floor(timeLeft / 60);
  

    return (
        <>
            <div className='countdown'>
                <div className='countdown-item border-chung-2'>
                    <div className='number-1 number-4 poppins-bold-bittersweet-24px'>
                        <span className='poppins-bold-bittersweet-24px'>0</span>
                    </div>
                    <div className='hrs poppin-normal-quick-silver-18px'>
                        <span className='poppin-normal-quick-silver-18px'>Hrs</span>
                    </div>
                </div>
                <div className='countdown-item border-chung-2'>
                    <div className='number-2 number-4 poppins-bold-bittersweet-24px'>
                        <span className='poppins-bold-bittersweet-24px'>{minutes}</span>
                    </div>
                    <div className='hrs poppin-normal-quick-silver-18px'>
                        <span className='poppin-normal-quick-silver-18px'>Min</span>
                    </div>
                </div>
                <div className='countdown-item border-chung-2'>
                    <div className='number-3 number-4 poppins-bold-bittersweet-24px'>
                        <span className='poppins-bold-bittersweet-24px'>{seconds}</span>
                    </div>
                    <div className='hrs poppin-normal-quick-silver-18px'>
                        <span className='poppin-normal-quick-silver-18px'>Sec</span>
                    </div>
                </div>
            </div>
        </>
    )
}

