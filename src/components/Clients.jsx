import React from 'react'

const Clients = () => {
  return (
    <section id="clients" class="clients">
    <div class="container" data-aos="zoom-in">

      <div class="clients-slider swiper">
        <div class="swiper-wrapper align-items-center" style={{display:"flex",gap:"30px",fontSize:"50px"}}>
          <div class="swiper-slide"><img src="src\assets\companyLogos\amazon.jpeg" class="img-fluid" alt=""/></div>
          <div class="swiper-slide"><img src="src\assets\companyLogos\bmw.jpeg" class="img-fluid" alt=""/></div>
          <div class="swiper-slide"><img src="src\assets\companyLogos\cocacola.jpeg" class="img-fluid" alt=""/></div>
          <div class="swiper-slide"><img src="src\assets\companyLogos\hundai.jpeg" class="img-fluid" alt=""/></div>
          <div class="swiper-slide"><img src="src\assets\companyLogos\oneplus.jpeg" class="img-fluid" alt=""/></div>
          <div class="swiper-slide"><img src="src\assets\companyLogos\titan.jpeg" class="img-fluid" alt=""/></div>
        </div>
        {/* <div class="swiper-pagination"></div> */}
      </div>

    </div>
  </section>
  )
}

export default Clients