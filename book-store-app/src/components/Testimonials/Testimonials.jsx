import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Odongkara Oscar",
    text: "This is very excellent and perfect.Thamks for doing this great work to promote our culture. Afwoyo",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Najuma Topista",
    text: "Asante sana, I have learnt a lot of Kiswahili from these books. I have also learnt about my culture as a Muganda",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Mutumba Benjamin",
    text: "I personally feel the great job of this app. Lets just push East Africa culture forward. Weebalee",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  //slide config
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-10">
      <div className="container">
        {/* header */}
        <div
          data-aos="slide-up"
          className="text-center mb-20 max-w-[400px] mx-auto"
        >
          <p
            className="text-sm bg-clip-text text-transparent
          bg-gradient-to-r from-primary to-secondary mb-4"
          >
            What our customer says
          </p>
          <h1 className="text-3xl front-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            The point where our clients inform us about their experiences. And
            we always make changes according to our clients' testimonies{" "}
          </p>
        </div>

        {/* card section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  className="flex flex-col gap-4
                shadow-lg py-8 px-6 mx-4 rounded-xl
                dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20
                    object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <p
                        className="text-gray-500
                      text-sm"
                      >
                        {data.text}
                      </p>
                      <h1
                        className="text-xl font-bold
                      text-black/80
                      dark:text-white"
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="absolute text-black/20 z-10 top-0 right-0
                font-serif text-9xl"
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
