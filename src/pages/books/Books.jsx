import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';



const Books = () => {
    const {storedBook} = useContext(BookContext);
    console.log("ListedBook", storedBook)
    return (
        <div>
            <h1>Listed books</h1>
        </div>
    );
};

export default Books;