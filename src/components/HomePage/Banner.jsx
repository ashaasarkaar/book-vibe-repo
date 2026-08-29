import React from 'react';
import BannerImg from '../../assets/bannar_book_image.png'

const Banner = () => {
    return (
        <div className=''>
            <div className="hero w-10/12 mx-auto  bg-base-200  my-10 rounded-2xl">
  <div className="hero-content min-h-[70vh] flex-col lg:flex-row-reverse justify-between w-full">
    <img
      alt="Banner Image Of Book"
      src={BannerImg}
      className="max-w-sm shadow-2xl"
    />
    <div>
      
      
      <div className='space-y-8'>
          <h1 className="text-5xl font-bold">Books to freshen up</h1>
        <h1 className="text-5xl font-bold">your bookshelf </h1>
   
      <button className="btn bg-[#23BE0A] text-white rounded-md">View The List</button>
      </div>
      

    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;