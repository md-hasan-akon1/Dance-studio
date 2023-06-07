
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{
                        backgroundImage: "url(" + "https://i.ibb.co/Tw24V9q/d-1.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-fit">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Hello there</h1>
                                <p className="mb-5 text-5xl font-bold text-[#D1A054]"> WelCome Our Dance Studio</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{
                        backgroundImage: "url(" + "https://i.ibb.co/qnxkT87/d-2.webp" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-fit">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Hello there</h1>
                                <p className="mb-5 text-5xl font-bold text-[#D1A054]"> WelCome Our Dance Studio</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{
                        backgroundImage: "url(" + "https://i.ibb.co/dcCsn9d/d-3.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-fit">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Hello there</h1>
                                <p className="mb-5 text-5xl font-bold text-[#D1A054]"> WelCome Our Dance Studio</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{
                        backgroundImage: "url(" + "https://i.ibb.co/D5mM75J/d-4.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-fit">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Hello there</h1>
                                <p className="mb-5 text-5xl font-bold text-[#D1A054]"> WelCome Our Dance Studio</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{
                        backgroundImage: "url(" + "https://i.ibb.co/4SKhngW/d-5.webp" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-fit">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Hello there</h1>
                                <p className="mb-5 text-5xl font-bold text-[#D1A054]"> WelCome Our Dance Studio</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                
                
            </Swiper>
        </div>
    );
};

export default Banner;