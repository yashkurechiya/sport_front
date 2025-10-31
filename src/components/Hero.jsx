import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
    return (
        <div className=''>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="shadow-lg"
            >
                {/* 5 Slides */}
                <SwiperSlide>
                    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[80vh] overflow-hidden">
                        <img
                            src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/uhveb3ygla0curpchfkk"
                            alt="Asian Youth Games 2025"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                        <div className="absolute bottom-10 sm:bottom-16 md:bottom-24 lg:bottom-32 px-4 sm:px-8 md:px-12 text-white">
                            <h1 className="font-stand text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 leading-tight">
                                INDIAN MEDAL WINNERS AT ASIAN YOUTH GAMES 2025
                            </h1>
                            <h2 className="font-medium text-xs sm:text-base md:text-lg lg:text-2xl w-full max-w-5xl">
                                India have won 27 medals — four gold, 10 silver and 13 bronze — at the third Asian Youth Games
                                in Bahrain so far and are 11th in the medal table.
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[85vh] lg:h-[80vh]   overflow-hidden">
                        <img
                            src="https://staticg.sportskeeda.com/editor/2024/08/d68ff-17231504871674-1920.jpg"
                            alt="India Hockey Team Tokyo 2020"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

                        <div className="absolute bottom-10 sm:bottom-16 md:bottom-24 lg:bottom-32 px-4 sm:px-8 md:px-12 text-white">
                            <h1 className="font-stand  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-tight drop-shadow-lg">
                                India Clinches Bronze at Tokyo 2020 Olympics
                            </h1>
                            <h2 className="font-xs text-sm sm:text-base md:text-lg lg:text-2xl w-full max-w-5xl">
                                Ending a 41-year wait, the Indian men’s hockey team defeated Germany to win bronze at the Tokyo Olympics —
                                a moment that reignited the pride and passion of Indian hockey.
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[85vh] lg:h-[80vh]   overflow-hidden">
                        {/* Background Image */}
                        <img
                            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/neeraj-chopra-273230767-16x9.jpg?VersionId=2LZ7k52OKnn4kiMns1rb5paBI2YIiYye"
                            alt="Neeraj Chopra"
                            className="w-full h-full object-cover"
                        />

                        {/* Left-to-right Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-15 sm:bottom-16 md:bottom-24 lg:bottom-28 left-4 sm:left-8 md:left-12 text-white max-w-5xl">
                            <h1 className="font-stand  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-tight drop-shadow-lg">
                                Neeraj Chopra Throws India into <br className="hidden sm:block" /> Olympic History
                            </h1>
                            <h2 className="font-xs text-sm sm:text-base md:text-lg lg:text-2xl leading-snug px-1 sm:px-0">
                                From the Asian Youth Games to Olympic glory, <br className="hidden md:block" />
                                Neeraj Chopra’s golden arm has made India shine on the world stage — <br className="hidden lg:block" />
                                a true symbol of dedication and excellence.
                            </h2>
                        </div>

                        {/* Medal Icon */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1021/1021220.png"
                            alt="Gold Medal Icon"
                            className="absolute z-20 h-16 sm:h-24 md:h-28 lg:h-40 right-4 sm:right-8 md:right-10 top-10 lg:top-100  sm:bottom-6 md:bottom-8"
                        />
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className="h-120 flex items-center justify-center bg-green-500 text-white text-2xl font-bold rounded-lg">
                        Slide 2 – Upcoming Events
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-120 flex items-center justify-center bg-red-500 text-white text-2xl font-bold rounded-lg">
                        Slide 3 – Academy Highlights
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-120 flex items-center justify-center bg-purple-500 text-white text-2xl font-bold rounded-lg">
                        Slide 4 – News & Articles
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-120 flex items-center justify-center bg-orange-500 text-white text-2xl font-bold rounded-lg">
                        Slide 5 – About Sports in India
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Hero
