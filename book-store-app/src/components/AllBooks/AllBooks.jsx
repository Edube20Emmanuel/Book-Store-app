import React from "react";
import Book1 from "../../assets/books/book1.jpeg";
import Book2 from "../../assets/books/book5.jpeg";
import Book3 from "../../assets/books/book4.jpeg";
import { FaStar } from "react-icons/fa6";
import Book4 from "../../assets/books/book3.jpeg";
import Book6 from "../../assets/books/book6.jpeg";
import Book7 from "../../assets/books/book7.jpeg";
import Book8 from "../../assets/books/book8.jpeg";
import Book9 from "../../assets/books/book9.jpeg";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Beneath the Lion's Gaze and other books",
    rating: 5.0,
    author: "Jennifer Nansubuga Makumbi and Others",
  },
  {
    id: 2,
    img: Book2,
    title: "TRIBAL NGOMA",
    rating: 4.0,
    author: "Wm.T.BIRCHMAN",
  },
  {
    id: 3,
    img: Book3,
    title: "TALES OF EAST AFRICA",
    rating: 4.7,
    author: "Jamilla Okubo",
  },
  {
    id: 2,
    img: Book4,
    title: "Swahili of East Africa Activity Book",
    rating: 4.0,
    author: "Lumumba",
  },
  {
    id: 3,
    img: Book6,
    title: "KISWAHILI",
    rating: 4.7,
    author: "Okwok Kenneth",
  },
  {
    id: 3,
    img: Book7,
    title: "EARLY EAST AFRICA",
    rating: 4.7,
    author: "Bernth Lindfors",
  },
  {
    id: 3,
    img: Book8,
    title: "Mkuki Na Nyota",
    rating: 4.7,
    author: "Peter Kimani",
  },
  {
    id: 2,
    img: Book9,
    title: "ANTHOLOGY EAST AFRICAN LITERATURE",
    rating: 4.0,
    author: "Omuntu",
  },
];

const AllBooks = () => {
  return (
    <>
      <div className="py-10">
        <div className="container py-10">
          {/* header */}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p
              className="text-sm bg-clip-text text-transparent
          bg-gradient-to-r from-primary to-secondary mb-4"
            >
              Best Books
            </p>
            <h1 className="text-3xl front-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Our top most books tell a story of thr diverse and interesting
              culture from the Mountains of Kirimanjaro,Rwenzori,Elgon,Kenya and
              the shores of Lake Victoria. They move further to talk about the
              amaizing cultures in Rwanda, Burundi, South Sudan and the tropical
              Forests of Congo.{" "}
            </p>
          </div>
          {/* card */}
          <div data-aos="slide-up">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            lg:grid-cols-5 place-items-center gap-5"
            >
              {BooksData.map((data) => (
                <div className="space-y-3">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150] object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font semibold">{data.title}</h2>
                    <p
                      className="text-sm text-gray-700
                    dark:text-gray-400"
                    >
                      {data.author}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="text-center mt-10
                cursor-pointer bg-primary
                text-white py-1 px-5 rounded-full"
              >
                View all books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
