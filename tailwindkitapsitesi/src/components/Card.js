import React from "react";
import "@themesberg/flowbite";
import { Link } from "react-router-dom";

function Card({ book }) {
  return (
    <div class="bg-gray-200 w-full h-full py-5 flex justify-center items-center m-2">
      <div class="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <div class="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
          Open
        </div>
        <div class="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500"></div>
        <div class="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"></div>
        <div class="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
          <div class="relative">
            <img
              src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
              class="max-h-60 object-cover rounded-t-xl"
              alt=""
            />
            <div class="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
              Recommended
            </div>
          </div>
          <div class="px-2 py-1">
            <div class="text-sm md:text-base font-bold pr-2">
              {book.kitapismi}
            </div>
            <div class="flex py-2">
              <div class="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
                {book.fiyat}
              </div>
              <div class="flex justify-between item-center">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 md:h-5 md:w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p class="text-gray-600 font-bold text-xs md:text-sm ml-1">
                    4.96
                    <span class="text-gray-500 font-normal">(76 rewiews)</span>
                  </p>
                </div>
              </div>
            </div>
            <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500 h-48">
              {book.aciklama.substring(0, 200) + "..."}
            </p>

            <Link to={`/book/${book.kitapismi}`}>
              <a
                className=" bg-blue-700 text-white p-2 rounded-lg hover:text-white hover:bg-blue-700"
                href="#"
              >
                {book.kitapismi}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
