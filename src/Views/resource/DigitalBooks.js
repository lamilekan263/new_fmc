import React from 'react'

import BookCard from './component/BookCard'
import PdfCard from './component/PdfCard';

const data =  [
    {
        id :1,
        title : "Psychology",
        total : 234 
    },
    {   
        id :2,
        title : "Biology",
        total : 2345 
    },
    {   
        id :3,
        title : "Language",
        total : 901
    },
    {   
        id :4,
        title : "Mathematics",
        total : 789 
    },
    {   
        id :5,
        title : "Sociology",
        total : 567 
    },
    {   
        id :6,
        title : "Toptea",
        total : 1265 
    },
    {   
        id :7,
        title : "Statistics",
        total : 234 
    },

]

const DigitalBooks = () => {
    return (
      <div className="p-3 md:p-5">
        <div className="md:grid grid-cols-4 gap-4  justify-center items-center text-center">
          {data.map((dataItem) => (
            <BookCard key={dataItem.id} title={dataItem.title} />
          ))}
            </div>
            <PdfCard />
      </div>
    );
}

export default DigitalBooks
