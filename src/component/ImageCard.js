import React from "react";

const ImageCard = ({ image }) => {

  return (
    <div className="w-full mx-auto rounded-md overflow-hidden">
      <img src={image.image} alt="" className="w-full h-36 md:h-48 object-contain p-2 my-5"/>
      <div className="px-6 py-8 text-center" >
        <div className="font-bold text-indigo-400 text-lg">
          {image.name}
        </div>
        <div className="text-indigo-400">
          <ul>
            <li>
              {image.description}
            </li>
            <li className="text-md">
              <strong>{image.price}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;