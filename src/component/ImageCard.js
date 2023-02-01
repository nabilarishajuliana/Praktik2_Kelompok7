import React from "react";

const ImageCard = ({ image }) => {
  const desc = image.description;
  const res =desc.substr(0, 40);

  return (
    <div className="bg-pink-100 lg:w-60  rounded-2xl overflow-hidden m-3 hover:bg-pink-color1 cursor-pointer text-pink-color2">
      <img src={image.image} alt="" className="w-full  h-36 md:h-48 object-contain p-2 mt-5 mb-1 "/>
      <div className="px-6 py-8 text-center " >
        <div className="font-bold text-black text-lg ">
          {image.name}
        </div>
        <div className="text-black ">
          <ul>
            <li>
              {res}...
            </li>
            <li className="text-md ">
              <strong>Rp. {image.price}</strong>
            </li>
            <li className="text-md ">
              {image.category}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
