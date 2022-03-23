import React from "react";
import { Helmet } from "react-helmet";

const Slider = () => {
  return (
    <>
      <div className="Slider">
        <div className="Slider-wrap">
          <iframe
            id="testimonialto-carousel-all-re-cruit-light"
            src="https://embed.testimonial.to/carousel/all/re-cruit?theme=light&autoplay=off&showmore=off&one-row=on&same-height=off"
            frameborder="0"
            scrolling="no"
            height="100%"
            width="100%"
          ></iframe>
          <Helmet>
            <script
              type="text/javascript"
              src="https://testimonial.to/js/iframeResizer.min.js"
              onload={`iFrameResize({log: false, checkOrigin: false}, "#testimonialto-carousel-all-re-cruit-light");`}
            ></script>
          </Helmet>
        </div>
      </div>
    </>
  );
};

export default Slider;
