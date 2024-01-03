import React, { useState } from "react";

const EditBook = ({ setShowContent, getEditData, updateBook }) => {
  const [formData, setFormData] = useState(getEditData);

  const handleBookIdChange = (e) => {
    setFormData({ ...formData, bookID: e.target.value });
  };
  const handleBookNameChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const handleBookAuthorChange = (e) => {
    setFormData({ ...formData, authors: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(formData);
    console.log("Form submitted:", formData);
    // You can perform any actions with the form data here
  };
  return (
    <>
      <div className="max-w-md mx-auto  bg-white rounded-md  flex items-center justify-center text-2xl">
        Edit Book Details
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Book ID :
          </label>
          <input
            type="text"
            value={formData.bookID}
            onChange={handleBookIdChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Book Name :
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={handleBookNameChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author :
          </label>
          <input
            type="text"
            onChange={handleBookAuthorChange}
            value={formData.authors}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-black w-[6rem] mr-4"
            onClick={() => setShowContent("booklist")}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-black w-[6rem]"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditBook;
