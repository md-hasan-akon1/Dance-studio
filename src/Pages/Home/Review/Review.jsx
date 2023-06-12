
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Rating } from "@smastrom/react-rating";
const Review = () => {
    return (
        <div>
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>What Our client say</h1>
            <p className='text-center'> beatae natus corporis porro maiores? Corrupti iusto illo veniam ab dicta, porro sit pariatur quisquam nam ea, harum eligendi enim maxime consequatur!</p>

            <div className='mt-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full  z-20" src='https://i.ibb.co/Cz7zn8h/man-1.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Of course, music and dance not only serve as social glue, but are also very useful for our physical and mental health. .</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full z-20" src='https://i.ibb.co/vQT6BZm/woman-3.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>But the truth is that dance is not only an excellent therapeutic resource. A study at Deakin University revealed that </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>

                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full  z-20" src='https://i.ibb.co/Cz7zn8h/man-1.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Of course, music and dance not only serve as social glue, but are also very useful for our physical and mental health. .</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full z-20" src='https://i.ibb.co/vQT6BZm/woman-3.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>But the truth is that dance is not only an excellent therapeutic resource. A study at Deakin University revealed that </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>

                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full  z-20" src='https://i.ibb.co/Cz7zn8h/man-1.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Of course, music and dance not only serve as social glue, but are also very useful for our physical and mental health. .</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full z-20" src='https://i.ibb.co/vQT6BZm/woman-3.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>But the truth is that dance is not only an excellent therapeutic resource. A study at Deakin University revealed that </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>

                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full  z-20" src='https://i.ibb.co/Cz7zn8h/man-1.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Of course, music and dance not only serve as social glue, but are also very useful for our physical and mental health. .</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full z-20" src='https://i.ibb.co/vQT6BZm/woman-3.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>But the truth is that dance is not only an excellent therapeutic resource. A study at Deakin University revealed that </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>

                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full  z-20" src='https://i.ibb.co/Cz7zn8h/man-1.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Of course, music and dance not only serve as social glue, but are also very useful for our physical and mental health. .</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-20 w-h-20 rounded-full z-20" src='https://i.ibb.co/vQT6BZm/woman-3.jpg' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                This is a very good camp for anyone
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>But the truth is that dance is not only an excellent therapeutic resource. A study at Deakin University revealed that </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>

                            </div>
                        </div>
                    </div></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Review;