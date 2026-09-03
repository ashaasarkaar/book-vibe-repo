import React, { createContext, useState } from 'react';

export const BookContext = createContext()



const BookProvider = ({children}) => {

    
    const[storedBook, setStoredBook] = useState([])

  const handleMarkAsRead = (currentBook)=>{
    
    const isExistBook = storedBook.find(existBook => existBook.bookId === currentBook.bookId)

   if(isExistBook){
    alert("This Book Is Already Exist")
   }
   else{
      setStoredBook([...storedBook, currentBook])
      alert(`${currentBook.bookName} is Added`)
   }
   console.log("read Book",  currentBook, "Stored Book", storedBook)
  }

  const data ={
    storedBook, 
    setStoredBook,
    handleMarkAsRead
  }

    return(
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    )
};

export default BookProvider;