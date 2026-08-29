import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
    return (

        <div>

            {/* Full Card START */}
            <div className='border border-gray-500 rounded-2xl p-8'>

                {/* Card Image START */}
                <div className='bg-[#F3F3F3] rounded-2xl flex justify-center py-20'>
                    <img className='w-30 h-45' src={book.image} alt={book.bookName} />
                </div>
                {/* Card Image END */}

                {/* Badge START */}
                <div className='flex justify-baseline gap-4 items-center mt-7'>
                    {(book.tags).map((tag, index) => {
                        return <h4 key={index} className='btn rounded-full text-[#23BE0A] bg-[#F3F3F3] cursor-default'>{tag}</h4>
                    })}
                </div>
                {/* Badge END */}

                {/* Card middle part(Book Name + Author Name) START  */}
                <div className='space-y-2 mt-2 mb-4'>
                    <h1 className='text-2xl font-bold'>{book.bookName}</h1>
                    <p className='font-semibold'>By : {book.author}</p>
                </div>
                {/* Card middle part(Book Name + Author Name) END */}

                    {/* Card END PART START */}
                       <div className='flex justify-between items-center border-t border-dashed pt-4 border-gray-400'>

                    <p>{book.category}</p>
                    {/* Card End Right Side Part Of Rating With START */}
                    <div className='flex items-center gap-2'>
                        <p>{book.rating}</p>
                        <FaRegStar />
                    </div>
                    {/* Card End Right Side Part Of Rating With END */}
                </div>
                 {/* Card END PART END */}

            </div>
            {/* Full Card END */}

        </div>
    );
};

export default BookCard;