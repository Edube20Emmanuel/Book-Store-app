import React, { useState } from "react";
import Book1 from "../../assets/books/book1.jpeg";
import Book2 from "../../assets/books/book5.jpeg";
import Book3 from "../../assets/books/book4.jpeg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Beneath the Lion's Gaze and other books",
    description:
      "It is a story about the lengths human beings will go in pursuit of freedom and the human price of a national revolution.East Africa Mbelle",
  },
  {
    id: 2,
    img: Book2,
    title: "TRIBAL NGOMA",
    description:
      "The Ngoni trace their origins to the Nguni and Zulu people of kwaZulu-Natal in South Africa. The displacement of the Ngoni people in the great scattering following the Zulu wars had repercussions in social reorganization as far north as Malawi and Zambia.",
  },
  {
    id: 3,
    img: Book3,
    title: "TALES OF EAST AFRICA",
    description:
      "Tales of East Africa is a collection of 22 traditional tales from Kenya, Uganda, and Tanzania. Welcome to a world of magical adventure—a place where a boy spares the life of a fearsome monster, a flock of doves brings a girl back from the dead, and a hare wreaks havoc among all the other animals.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = useState(Book1);
  const [title, setTitle] = useState(
    "Kintu,Beneath The Lion's Gaze and other books"
  );
  const [description, setDescription] = useState(
    "Experience the cultur and language of East African tribes at your our confirt. Africa Mashariki."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px]
        bg-gray-100 flex justify-center items-center
        dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/*text-content-section*/}
            <div
              className="flex flex-col justify-center
            gap-4 pt-12 sm:pt-0 text-center sm:text-left
            order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-5xl sm:text-6xl
                    lg:text-7xl font-bold"
              >
                {title}
                <p
                  data-aos="slide-up"
                  data-aos-duration="100"
                  data-aos-delay="100"
                  className="bg-clip-text text-transparent
                bg-gradient-to-b from-primary text-right text-sm to-secondary"
                >
                  BY GULOBA EMMANUEL EDUBE
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="100"
                data-aos-delay="100"
                className="text-sm"
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  data-aos="zoom in"
                  className="bg-gradient-to-r from-primary
                to-secondary text-white px-4
                py-2 rounded-full mt-4 hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/*img section*/}
            <div
              className="min-h-[450px] flex justify-center items-center
            relative order-1 sm:order-2"
            >
              {/*main image*/}
              <div
                className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center
                items-center"
              >
                <img
                  data-aos="zoom in"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] h-[300px] sm:w-[h-450px] sm:w-[450px]
                sm:scale-125 object-contain mx-auto"
                />
              </div>
              {/*other image list*/}
              <div
                className="flex lg:flex-col lg:top-1/2
              lg:-translate-y-1/2 lg:py-2 
              justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white 
              rounded-full"
              >
                {ImageList.map((data) => (
                  <img
                    data-aos="zoom in"
                    data-aos-once="true"
                    src={data.img}
                    className="max-w-[100px] h-
                  [100px] object-contain 
                  inline-block hover:scale-110 
                  duration-200"
                    onClick={() => {
                      setImageId(
                        data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3
                      );
                      setTitle(data.title);
                      setDescription(data.description);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
