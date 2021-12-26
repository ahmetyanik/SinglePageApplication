import "./App.css";

function App() {
  return (
    <div className="p-3 bg-[#1e293b] lg:columns-2 lg:flex">
      <div className="sm:columns-2 flex justify-between lg:order-2 lg:flex lg:flex-wrap">
        <img
          className="mb-3 rounded-lg sm:w-6/12 sm:h-52 sm:p-1 lg:w-full lg:h-40"
          src="https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg"
          alt=""
        />

      
          <img
            className="mb-3 rounded-lg hidden sm:block sm:w-6/12 sm:h-52 sm:p-1 md:w-3/12 lg:w-6/12 lg:p-1 lg:h-40"
            src="https://tailwindcss.com/_next/static/media/beach-house-interior-1.bc69273a536a51bb58092b2896b92e3a.jpg"
            alt=""
          />
          <img
            className="hidden rounded-lg sm:hidden md:block md:w-3/12 md:p-1 h-52 lg:w-6/12 lg:p-1 lg:h-40"
            src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.de1a47680b1fb31d36d1130dc925b197.jpg"
            alt=""
          />
      </div>

      <div className="p-3 lg:order-1">
        <div className="text-white text-xs mb-3 sm:hidden">
          <span>4.89(128) .</span> <span>Collingwood, Ontario </span>
        </div>

        <div className="flex sm:justify-between sm:columns-2 sm:items-center lg:block lg:columns-1">
          <div className="hidden sm:block">
            <div className="text-white text-xs sm:block mb-2">
              <div className="text-gray-400 text-sm font-semibold mb-2">
                Entire House
              </div>
              <div className="text-white text-lg font-bold mb-2">
                Beach House in Collingwood
              </div>
            </div>
            <div className="text-white">
              <span>4.89(128) .</span> <span>Collingwood, Ontario </span>
            </div>
          </div>

          <button className="rounded-md bg-indigo-700 p-2 text-sm text-white mb-3 sm:h-10 lg:mt-3">
            Check availability
          </button>
        </div>

        <div>
          <p className="text-justify text-gray-400 text-sm sm:mt-3">
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cosy place to lay their head for a night or
            two. This beach house sits in a vibrant neighborhood littered with
            cafes, pubs, restaurants and supermarkets and is close to all the
            major attractions such as Edinburgh Castle and Arthur's Seat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
