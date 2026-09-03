import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()



const BookProvider = ({children}) => {

    
    const[storedBook, setStoredBook] = useState([])
    const[wishListBook, setWishListBook] = useState([])

  const handleMarkAsRead = (currentBook)=>{
    
    const isExistBook = storedBook.find(existBook => existBook.bookId === currentBook.bookId)

   if(isExistBook){
    toast.error("This Book Is Already in Read List")
   }
   else{
      setStoredBook([...storedBook, currentBook])
      toast.success(`${currentBook.bookName} is Added to Read List`)
   }
   console.log("read Book",  currentBook, "Stored Book", storedBook)
  }

  const handleWishListBook = (currentBook)=>{
    
    const isExistBookInReadList = storedBook.find(existBook => existBook.bookId === currentBook.bookId)

   if(isExistBookInReadList){
    toast.error("This Book Is Already Exist in Read List")
    return;
   }
   const isExistBookInWishList = wishListBook.find(wishBook => wishBook.bookId === currentBook.bookId)
   if(isExistBookInWishList){
    toast.error("This Book Is Already Exist in Wish List")
   }
   else{
      setWishListBook([...wishListBook, currentBook])
      toast.success(`${currentBook.bookName} is Added to Wish List`)
   }
   console.log("read Book",  currentBook, "Stored Book", storedBook, "Wish Listed Book", wishListBook)
  }

  const data ={
    storedBook, 
    setStoredBook,
    handleMarkAsRead,
    wishListBook,
    setWishListBook,
    handleWishListBook
  }

    return(
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    )
};

export default BookProvider;