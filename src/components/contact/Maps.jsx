import React from 'react'

const Maps = () => {
  return (
    <div>
    <section data-aos="fade-up" data-aos-delay="250">
      <iframe
        className="w-full h-[250px] md:h-[500px] lg:h-[500px] px-28 py-4 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2395163419596!2d106.8291825733098!3d-6.232123761027811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f7a70c7449%3A0xc3689d6a04ce2d4!2sPT%20FitAja%20Digital%20Nusantara!5e0!3m2!1sid!2sid!4v1696219310192!5m2!1sid!2sid"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
  
  )
}

export default Maps