import React, { useEffect, useRef } from 'react';
import { useCategory } from '../utils/hooks/useCategory';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import medicineOffer from '../assets/img/Medicine_Offer.jpg';
import drugsOffer from '../assets/img/drugs_offer.jpg';
import beautyproducts from '../assets/img/Beauty_Products_offer.jpg';

function Home() {
    const { fetchCategorys, categorys } = useCategory();
    const swiperContainerRef = useRef(null);
    const nextElRef = useRef(null);
    const prevElRef = useRef(null);

    useEffect(() => {
        if (swiperContainerRef.current && nextElRef.current && prevElRef.current) {
            const swiper = new Swiper(swiperContainerRef.current, {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: nextElRef.current,
                    prevEl: prevElRef.current,
                },
            });

            return () => {
                // Cleanup the swiper instance when the component unmounts
                if (swiper) {
                    swiper.destroy();
                }
            };
        }
    }, []);

    useEffect(() => {
        fetchCategorys();
    }, [fetchCategorys]);
  return (
    <>
          <div className='hero'>
      </div>
          <div className='hero-about'>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                  <div className="col-inner column-left">
                      <div className="box megamenu">
                          <div className="box-heading">
                              <h3>Categories</h3>
                          </div>
                          <ul className="sf-menu sf-js-enabled sf-arrows">
                              {categorys.map((category, index) => (
                                  <li key={index}><a href={`/shop/${category.productCategoryID}`}>{category.category}</a></li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                  <div className="col-inner column-right">
                      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ marginLeft: '25px' }}>
                          <SwiperSlide>
                              <div className="slide-image">
                                  <img src={medicineOffer} alt="Medicine Offer" />
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="slide-image">
                                  <img src={drugsOffer} alt="FCAIH" />
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="slide-image">
                                  <img src={beautyproducts} alt="FCAIH" />
                              </div>
                          </SwiperSlide>
                      </Swiper>
                    </div>
              </div>
          </div>
          <div className='container'>
      </div>
    </>
  );
}

export default Home;