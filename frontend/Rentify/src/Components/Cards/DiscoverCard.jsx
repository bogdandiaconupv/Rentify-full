export default function DiscoverCard(prop) {
   

    return (
      <div className=" w-96 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out m-5">
        <img
          className="w-full h-40 object-contain rounded-t-lg dragg"
                alt="Card Image"
                draggable="false"
          src={prop.object.image}
        />
        <div className="p-4">
                <h2 className="text-xl  font-semibold">{prop.object.name}</h2>
          <p className="text-gray-600">
                    {prop.object.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              Learn More
            </button>
            <p className=" border border-footer_color   text-pearl_green cursor-default px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              {prop.object.price}
            </p>
          </div>
        </div>
      </div>
    );
}