import React from 'react';
import { FaFileAlt, FaUserFriends } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';


const ListedWishListBooks = ({wishBook}) => {
     const{image, bookName, author, tags, yearOfPublishing, publisher, totalPages, rating, category} = wishBook;
    return (
       <div className='border-2 border-gray-300 rounded-2xl mt-8'>
                  <div className='flex items-center gap-20 p-5'>
      
                  {/* Left Side Book Image START */}
                  <div className='bg-[rgba(19,19,19,0.05)] rounded-2xl p-10'>
                      <img className='w-50 h-55' src={image} alt={bookName}></img>
                  </div>
                  {/* Left Side Book Image START */}
      
      
                  {/* Right Side Text Container START */}
                  <div className='space-y-4 flex-1'>
                      <h1 className='font-bold text-3xl'>{bookName}</h1>
                      <h2 className='text-[#rgba(19,19,19,0.8)] text-lg'>By : {author}</h2>
      
                     
                       {/* Badge START */}
                      <div className="flex items-center gap-10">
      
                          <div className="flex justify-baseline gap-4 items-center border-base-300">
      
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
      
                            <div className='flex items-center gap-2 text-[rgba(19,19,19,0.6)] text-lg'>
      
                              <IoLocation />
                            <span>Year of Publishing: </span>
                              <span>{yearOfPublishing}</span>
                      </div>
                     
                      </div>
                      {/* Badge END */}
      
                    
      
                      {/* publisher + Total Pages Section START */}
                      <div className='flex items-center gap-6 text-[rgba(19,19,19,0.6)] text-lg'>
                          <div className='flex items-center gap-2'>
                              <FaUserFriends />
                              <p>Publisher: {publisher}</p>
                          </div>
      
                          <div className='flex items-center gap-2'>
                              <FaFileAlt />
                              <p>Page {totalPages}</p>
                          </div>
                      </div>
                      {/* publisher + Total Pages Section END */}
                      <div className='border-t-2 border-gray-300 w-full'>
      
                      </div>
        
      
                      <div className='space-x-5'>
                          <button className='btn rounded-full p-6 text-lg text-[#328EFF] bg-[rgba(50,142,255,0.15)]'>Category: {category}</button>
                          <button className='btn rounded-full p-6 text-lg text-[#FFAC33] bg-[rgba(255,172,51,0.15)]'>Rating: {rating}</button>
                          <button className='btn rounded-full p-6 text-lg text-white bg-[#23BE0A]'>View Details</button>
                      </div>
      
      
                  </div>
                  {/* Right Side Text Container END */}
      
                   
                  
      
                  </div>
              </div>
    );
};

export default ListedWishListBooks;