import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';



const Books = () => {
    const {storedBook, wishListBook} = useContext(BookContext);
    console.log("ListedBook", storedBook, "Wish Listed Book", wishListBook)
    return (
        <div>
            <h1>Length Read Listed books : {storedBook.length}</h1>
            <h1>Length Wish Listed books : {wishListBook.length}</h1>
        </div>
    );
};

export default Books;