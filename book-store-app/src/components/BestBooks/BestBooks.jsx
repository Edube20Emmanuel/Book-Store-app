import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Img1,
    title: "His life",
    description: "My nbjhdbb bc nnbcn nbcbbxc  hbcvhbjvc cvjhhcb",
  },
  {
    id: 2,
    img: Img2,
    title: "Who's there",
    description: "My nbjhdbb bc nnbcn nbcbbxc  hbcvhbjvc cvjhhcb",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description: "My nbjhdbb bc nnbcn nbcbbxc  hbcvhbjvc cvjhhcb",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolor, sunt at deleniti doloremque repudiandae accusantium delectus
            dolores quam. Dolores repudiandae beatae explicabo accusantium quae
            doloribus ex eum aliquid voluptatem.
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
