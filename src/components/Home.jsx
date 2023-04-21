import React, { useState } from "react";
import Data from "../data.json";
import Card from './Card';
import Page from "./Page";
import Sort from "./Sort";
import Navbar from './Navbar';

const Home = () => {
  const [data, setData] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = data.slice(firstBookIndex, lastBookIndex);

  return (
    <div>
      <Navbar/>
      <Sort 
        data={data}
        setData = {setData}
      />
      <Card details={currentBooks}/>
      <Page
        totalBooks={Data.length}
        booksPerPage={booksPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home