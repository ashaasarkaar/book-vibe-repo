import React, { useContext } from 'react';
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
    return (

        <div className='mb-50 w-10/12 mx-auto mt-8'>


            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readListBook.length === 0 ? (
                        <EmptyReadList/>
                        ) : (
                              <div>
                        {
                            readListBook.map((readBook, index) => <ListedReadListBooks readBook={readBook} key={index}></ListedReadListBooks>
                            )
                        }
                    </div>
                        )
                        
                    }
                  
                </TabPanel>
                <TabPanel>
                    {
                        wishListBook.length === 0 
                        ? <EmptyWishlist/>
                        :  <div>
                        {
                            wishListBook.map((wishBook, index) => <ListedWishListBooks wishBook={wishBook} key={index}></ListedWishListBooks>
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