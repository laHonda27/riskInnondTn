import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import innond1 from '../images/innond/INOND1.jfif'
import innond2 from '../images/innond/INOND5.jfif'

function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
  
    return (
        <Slider {...settings}>
        <div>
        <img className="block w-full" src="https://www.francetvinfo.fr/pictures/RNB0wguEmEUT5n2xX95E9HtrOl8/908x510/2019/10/29/phpjsHaxP.jpg"  alt="Feed 01" />
        </div>
        <div>
        <img className="block w-full" src="https://img.20mn.fr/nF9jbZDdSVinZliYktxKvSk/1200x768_inondations-tunisie-illustration"  alt="Feed 01" />
        </div>
        <div>
        <img className="block w-full" src="https://iresizer.devops.arabiaweather.com/resize?url=https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/tunisia-flooding.jpg&size=850x530&force_webp=1"  alt="Feed 01" />
        </div>
      </Slider>
    );
  }
  

export default Carousel;
