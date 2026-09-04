import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadListBooks from '../../components/listedBooks/ListedReadListBooks';
import ListedWishListBooks from '../../components/listedBooks/ListedWishListBooks';
import EmptyWishlist from '../../components/listedBooks/EmptyListedBooks/EmptyWishlist';
import EmptyReadList from '../../components/listedBooks/EmptyListedBooks/EmptyReadList';



const Books = () => {
    const { readListBook, wishListBook } = useContext(BookContext);
    // console.log("ListedBook", readListBook, "Wish Listed Book", wishListBook)
    const[sortingType, setSortingType] = useState('')

    // console.log('pages', sortingType)
    // console.log('Rating', sortingType)

    const[filteredReadListBook, setFilteredReadListBook] = useState(readListBook)

    

    
        const filteredWishedListBook = [...wishListBook].sort((x, y) => {
            if(sortingType === 'Pages'){
                return x.totalPages - y.totalPages
            }
            else if(sortingType === 'Rating'){
                return x.rating - y.rating
            }
            return 0;
        })
    





   
    return (

        <div className='mb-50 w-10/12 mx-auto mt-2'>

            <div className='flex justify-center'>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setSortingType('Pages')}>
                            <a>Pages</a>
                        </li>
                        <li onClick={()=>setSortingType('Rating')}>
                            <a>Rating</a>
                        </li>
                    </ul>
                </div>
            </div>


            <Tabs className='m-0 p-0'>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    {
                       filteredReadListBook.length === 0 ? (
                            <EmptyReadList />
                        ) : (
                            <div>
                                {
                                    filteredReadListBook.map((readBook, index) => <ListedReadListBooks readBook={readBook} key={index} sortingType={sortingType}  setFilteredReadListBook={setFilteredReadListBook}></ListedReadListBooks>
                                    )

                                    
                                }
                            </div>
                        )

                    }

                </TabPanel>
                <TabPanel>
                    {
                        filteredWishedListBook.length === 0
                            ? <EmptyWishlist/>
                            : <div>
                                {
                                    filteredWishedListBook.map((wishBook, index) => <ListedWishListBooks wishBook={wishBook} key={index} sortingType={sortingType}></ListedWishListBooks>
                                    )
                                }
                            </div>
                    }

                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Books;