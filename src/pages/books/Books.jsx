import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadListBooks from '../../components/listedBooks/ListedReadListBooks';
import ListedWishListBooks from '../../components/listedBooks/ListedWishListBooks';



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
                    <div>
                        {
                            readListBook.map((readBook, index) => <ListedReadListBooks readBook={readBook} key={index}></ListedReadListBooks>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                     <div>
                        {
                            wishListBook.map((wishBook, index) => <ListedWishListBooks wishBook={wishBook} key={index}></ListedWishListBooks>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Books;