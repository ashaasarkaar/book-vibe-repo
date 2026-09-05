const getAllReadListBookFromLocalDB = () =>{
    const allReadBooks = localStorage.getItem('readBook');
    if(allReadBooks) return JSON.parse(allReadBooks)
    return [];
}


const addReadListBookToLocalDB = (book) =>{
    const addAllReadBooks = getAllReadListBookFromLocalDB();
      console.log("New Book:", book);
    console.log("New Book ID:", book.bookId);
    console.log("Existing Books:", addAllReadBooks);
    const isAlreadyExistReadBook = addAllReadBooks.find(bk => bk.bookId === book.bookId) 
    if(!isAlreadyExistReadBook){
        addAllReadBooks.push(book)
        localStorage.setItem('readBook', JSON.stringify(addAllReadBooks))
    }
    console.log('push korar pore',addAllReadBooks)
}

export {getAllReadListBookFromLocalDB, addReadListBookToLocalDB}