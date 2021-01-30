import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook
} from "@fortawesome/free-solid-svg-icons";


const BookCard = ({title}) => {
    return (
      <div className="shadow-lg p-5 mt-3 md:mt-0">
        <FontAwesomeIcon icon={faBook} size="lg" />
        <h1>{title}</h1>
      </div>
    );
}

export default BookCard
