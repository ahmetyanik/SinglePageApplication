import React, { useState } from "react";

function Card({ book,image }) {

  return (
    <div  className="m-1 shadow-2xl"> 
    
      <div  className="card flex max-w-sm w-80 bg-white shadow-md rounded-lg overflow-hidden mx-auto "> 
        <div className="flex items-center w-full px-2 py-3">
          <div className="mx-3 w-full">
            <div className="mb-6 mt-2"></div>
            <div className="flex flex-row mb-4 justify-center">
              <div className="flex flex-col mb-4 ml-4 mt-1">
                <div className="text-gray-600 font-semibold">{book.name}</div>
                <div className="text-gray-600 font-base text-sm">
                  {book.authors}
                </div>
                <div className="text-gray-400 font-base text-sm italic">
                  {book.publisher}
                </div>
              </div>
            </div>
            <div className="text-gray-400 font-medium text-sm rounded-md cursor-pointer mb-10 flex justify-center">
              <img style={{height:"200px"}} className="rounded" src={image.img} />
            </div>
            <div className="flex justify-center mb-4">
              <span
                className="tracking-wider text-white bg-yellow-700 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold"
                title=""
              >
                <i className="fas fa-heart" aria-hidden="true"></i> Number of Pages: {book.numberOfPages}
              </span>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
