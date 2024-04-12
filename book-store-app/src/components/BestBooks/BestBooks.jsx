import React from "react";
import Img1 from "../../assets/books/book5.jpeg";
import Img2 from "../../assets/books/book1.jpeg";
import Img3 from "../../assets/books/book4.jpeg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Img2,
    title: "Beneath the Lion's Gaze and other books",
    description:
      "It is a story about the lengths human beings will go in pursuit of freedom and the human price of a national revolution.East Africa Mbelle",
  },
  {
    id: 2,
    img: Img1,
    title: "TRIBAL NGOMA",
    description:
      "The Ngoni trace their origins to the Nguni and Zulu people of kwaZulu-Natal in South Africa.",
  },
  {
    id: 3,
    img: Img3,
    title: "TALES OF EAST AFRICA",
    description:
      "Tales of East Africa is a collection of 22 traditional tales from Kenya, Uganda, and Tanzania.",
  },
];

const BestBooks = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="py-10">
        <div className="container"></div>
        {/* Header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p
            className="text-sm bg-clip-text text-transparent
          bg-gradient-to-r from-primary to-secondary mb-4"
          >
            Trending Books
          </p>
          <h1 className="text-3xl front-bold">Best Books</h1>
          <p className="text-xs text-gray-400">
            The best of our books that will help you get more information about
            our diverse cultures in East Africa. These books talk about the
            tribes and their different cultures and most importantly the The
            Kiswahili language which is widely spoken in East Africa. "Sayidiya
            kuweka East Africa Mbelle". Please support the East African language
            all over the world.
          </p>
        </div>
        {/* card section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5
        place-item-center"
        >
          {BooksData.map((book) => (
            <div
              data-aos="zoom in"
              className="rounded-2xl bg-white dark:bg-gray-800 
            hover:bg-primary dark:hover:bg-primary 
            hover:text-white relative shadow-xl duration-high
            group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={book.img}
                  alt=""
                  className="max-w-[100px] block mx-auto 
                transform -translate-y-14
                group-hover:scale-105 duration-300 
                shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div
                  className="w-full flex items-center 
                justify-center"
                >
                  <FaStar className="text-yello-500" />
                  <FaStar className="text-yello-500" />
                  <FaStar className="text-yello-500" />
                  <FaStar className="text-yello-500" />
                </div>
                <h1 className="text-xl font-bold">{book.title}</h1>
                <p
                  className="text-gray-500
                group-hover:text-white duration-300
                text-sm line-clamp-2"
                >
                  {book.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-primary to-secondary 
                text-white px-4 py-2 rounded-full 
                mt-4 hover:scale-105 duration-200 group-hover:bg-white
                group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestBooks;
