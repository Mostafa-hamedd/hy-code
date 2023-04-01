import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { isMobileContext } from "../../contexts/isMobileContext";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const HomeBanner = () => {
    const { isMobile } = useContext(isMobileContext)
    const { locale } = useRouter()
    const { t } = useTranslation('common')
    const bannerData = [
        !isMobile ? "/homePage/banner1.jpg" : "/homePage/banner1-mobile.jpg",
        !isMobile ? "/homePage/banner2.jpg" : "/homePage/banner2-mobile.jpg",
        !isMobile ? "/homePage/banner3.jpg" : "/homePage/banner3-mobile.jpg"
    ]
    return (
        <div className="home-banner-container">
            <Swiper
                style={{ direction: locale == "ar" ? "rtl" : "ltr" }}
                key={bannerData?.length+locale}
                modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                mousewheel={{ forceToAxis: true }}
                navigation={{
                    nextEl: ".swiper-button-next-banner",
                    prevEl: ".swiper-button-prev-banner",
                }}
                className="swiper-banner-section"
                slidesPerView={1}
                pagination={{
                    clickable: true
                }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

            >
                {bannerData?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="img-container">
                            <div className="overlay"></div>
                            <Image
                                alt="banner-img"
                                src={item}
                                fill
                            />
                        </div>
                        <div className="banner-data">
                            <h1 style={{ display: "none" }}>Hyundai</h1>
                            <div className="logo-container">
                                <Image
                                    alt="logo"
                                    src={'/homePage/home-banner-text.svg'}
                                    fill
                                />
                            </div>
                            <p>{t('banner.shop_select')}</p>
                            <Link href={'/'} passHref>
                                <p className="button">{t('banner.Learn_more')}
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#fff"></path>
                                    </svg>
                                </p>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HomeBanner;