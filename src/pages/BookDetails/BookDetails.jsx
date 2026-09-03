
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';

const BookDetails = () => {

  const { id } = useParams();

  const bookDetailsPromise = useLoaderData();

  const expectedBook = bookDetailsPromise.find(
    book => book.bookId == id
  );

  // console.log(expectedBook);



  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = expectedBook;

   const {handleMarkAsRead} = useContext(BookContext);
  console.log("handleMarkASRead", handleMarkAsRead)
  
  return (

    <div className="card lg:card-side bg-base-100 shadow-sm w-10/12 mx-auto my-13 mb-15">

      {/* Book Image */}
      <figure className="flex-1 bg-base-200 rounded-2xl p-8 flex justify-center">

        <img
          className="w-full max-w-[400px] h-auto object-contain"
          src={image}
          alt={bookName}
        />

      </figure>


      {/* Book Information */}
      <div className="card-body flex-1">

        <h2 className="card-title text-base-content">
          {bookName}
        </h2>

        <p className="text-base-content/80 text-lg">
          By : {author}
        </p>

        <div className="divider my-0"></div>

        <p className="text-base-content/80 text-lg">
          {category}
        </p>

        <div className="divider my-0"></div>

        <p className="font-extrabold text-base-content">
          Review :{" "}
          <span className="font-normal text-base-content/80">
            {review}
          </span>
        </p>


        {/* Badge START */}
        <div className="grid grid-cols-3">

          <div className="flex justify-baseline gap-4 items-center mt-7 border-base-300">

            <h3 className="font-extrabold text-base-content">
              Tag
            </h3>

            {tags.map((tag, index) => {

              return (
                <h4
                  key={index}
                  className="btn rounded-full
                  text-[#23BE0A]
                  bg-base-200
                  cursor-default"
                >
                  #{tag}
                </h4>
              );

            })}

          </div>

        </div>

        <div className="divider"></div>
        {/* Badge END */}


        {/* Book Details */}
        <div className="grid grid-cols-2 space-y-5">

          <p className="text-base-content/70">
            Number of Pages:
          </p>

          <p className="text-base-content font-extrabold">
            {totalPages}
          </p>


          <p className="text-base-content/70">
            Publisher:
          </p>

          <p className="text-base-content font-extrabold">
            {publisher}
          </p>


          <p className="text-base-content/70">
            Year of Publishing:
          </p>

          <p className="text-base-content font-extrabold">
            {yearOfPublishing}
          </p>


          <p className="text-base-content/70">
            Rating:
          </p>

          <p className="text-base-content font-extrabold">
            {rating}
          </p>

        </div>


        {/* Buttons */}
        <div className="card-actions justify-start">

          <button onClick={()=>handleMarkAsRead(expectedBook)} className="btn px-5 py-4 font-bold">
            Mark as Read
          </button>

          <button
            className="btn btn-primary
            bg-[#50B1C9]
            border-none
            px-5 py-4
            font-bold
            text-white"
          >
            Add to Wishlist
          </button>

        </div>

      </div>

    </div>
  );
};

export default BookDetails;

