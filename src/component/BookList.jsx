import React, { useEffect, useState } from "react";
import { data } from "../utilities/bookslist";
import Books from "./Books";
import AddNewBook from "./AddNewBook";
import EditBook from "./EditBook";

const BookList = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const [showContent, setShowContent] = useState("booklist");
  const [getEditData, setEditData] = useState({});

  useEffect(() => {
    setAllBooks(data.message);
    setFilteredBooks(data.message);
  }, []);

  useEffect(() => {
    // Update filteredBooks when searchBook changes
    const filteredData = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchBook.toLowerCase())
    );
    setFilteredBooks(filteredData);
  }, [searchBook, allBooks]);

  const handelSearch = (e) => {
    setSearchBook(e.target.value.toLowerCase());
  };

  const addNewBookHandel = () => {
    setShowContent("addbook");
  };

  const addBook = (data) => {
    setAllBooks((prevBooks) => [...prevBooks, data]);
    setShowContent("booklist");
  };

  const editBook = (data) => {
    setShowContent("editbook");
    setEditData(data);
  };

  const updateBook = (data) => {
    const indexOfBook = allBooks.findIndex((book) => book.ID === data.ID);
    const tempData = [...allBooks];
    tempData[indexOfBook] = data;
    setAllBooks(tempData);
    setShowContent("booklist");
  };

  return (
    <div className="h-full w-full flex items-center justify-start flex-col pt-6 mx-auto ">
      <div className=" h-[15%]">
        <input
          type="text"
          className=" border border-blue-300 p-2 w-[500px] mr-10"
          placeholder="Search Book here"
          value={searchBook}
          onChange={handelSearch}
        />
        <button
          className=" px-11 py-2 mr-2 bg-black text-white rounded-xl"
          onClick={addNewBookHandel}
        >
          Add New Book
        </button>
      </div>
      <div className="w-[90%] h-[80%] overflow-y-auto">
        {showContent === "booklist" && (
          <Books
            booksList={filteredBooks}
            setBookList={setAllBooks}
            setShowContent={setShowContent}
            editBook={editBook}
          />
        )}
        {showContent === "addbook" && (
          <AddNewBook setShowContent={setShowContent} addBook={addBook} />
        )}
        {showContent === "editbook" && (
          <EditBook
            setShowContent={setShowContent}
            updateBook={updateBook}
            getEditData={getEditData}
          />
        )}
      </div>
    </div>
  );
};

export default BookList;
