import React from "react";

const Books = ({ booksList, setBookList, setShowContent, editBook }) => {
  const handelDeleteBook = (id) => {
    const filteredList = booksList.filter((book) => book.bookID !== id);
    setBookList(filteredList);
  };

  // console.log(booksList);
  return (
    <table class="w-full h-full overflow-y-scroll table-auto ">
      <thead className=" sticky top-0 ">
        <tr className=" bg-black rounded-t-xl text-white grid grid-cols-4 w-full px-4">
          <td className="py-4 min-w-[200px]">ID</td>
          <td className="py-4 min-w-[200px]">Book Name</td>
          <td className="py-4 min-w-[200px]">Authors</td>
          <td className="py-4 min-w-[200px]">Actions</td>
        </tr>
      </thead>
      <tbody className="border">
        {booksList.map((book) => {
          return (
            <tr
              key={book.bookID}
              className=" rounded-xl grid grid-cols-4 w-full px-4 border-b-2"
            >
              <td className="py-4 pr-32 min-w-[200px] flex items-center justify-start">
                {book.bookID}
              </td>
              <td className=" py-4 pr-32 min-w-[200px] flex items-center justify-start">
                {book.title}
              </td>
              <td className=" py-4 pr-32 min-w-[200px] flex items-center justify-start">
                {book.authors}
              </td>
              <td className="flex items-center justify-start">
                <button
                  className="px-6 py-2 mr-2 h-[2.5rem] bg-black text-white rounded-full"
                  onClick={() => editBook(book)}
                >
                  Edit
                </button>
                <button
                  className="px-6 py-2 mr-2 h-[2.5rem]  bg-black text-white rounded-full"
                  onClick={() => handelDeleteBook(book.bookID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Books;
