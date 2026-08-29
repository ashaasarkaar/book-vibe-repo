import React, { use } from 'react';
import BookCard from '../UI/BookCard';

const booksPromise = fetch('./booksData.json')
    .then(res => res.json())

const AllBooks = () => {
    const books = use(booksPromise)
    // console.log(books)
    return (
        <div className='mb-10'>

            <div>
                <h2 className='text-4xl text-center font-bold my-12'>Books</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-10/12 mx-auto'>
                {
                    books.map((book, index) =>
                        <BookCard key={index} book={book} ></BookCard>
                    )
                }
            </div>

        </div>



    );
};

export default AllBooks;